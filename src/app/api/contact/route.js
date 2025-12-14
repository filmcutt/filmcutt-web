import { NextResponse } from 'next/server';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';         // Edge e nodemailer cholbe na
export const dynamic = 'force-dynamic';  // Cache na kore always run

// Firebase Admin init
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || '{}');
// Windows/.env e \n thakle real newline e convert
if (serviceAccount.private_key) {
  serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
}
if (!getApps().length) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

// Gmail SMTP transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,       // 587 use korle secure: false dite hobe
  secure: true,    // 465 = true
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// XSS/HTML escape
function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Owner-ke email pathano
async function sendOwnerEmail(data) {
  const { name, email, projectType, phone, knowAboutUs, country, message } = data;

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;">
      <h2>New Client Message</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Country:</strong> ${escapeHtml(country)}</p>
      <p><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>
      <p><strong>Heard about us:</strong> ${escapeHtml(knowAboutUs)}</p>
      <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"${process.env.MAIL_FROM_NAME || 'Website'}" <${process.env.GMAIL_USER}>`,
    to: process.env.MAIL_TO || process.env.GMAIL_USER,
    subject: `New contact — ${name}`,
    replyTo: email, // Owner reply korle user-er mail e jabe
    text: `Name: ${name}
Email: ${email}
Phone: ${phone}
Country: ${country}
Project Type: ${projectType}
Heard about us: ${knowAboutUs}

Message:
${message}`,
    html,
  });
}

// POST handler
export async function POST(req) {
  try {
    const data = await req.json();

    // Basic validation
    if (!data?.name || !data?.email || !data?.message) {
      return NextResponse.json({ message: 'name, email, message dorkar' }, { status: 400 });
    }

    // 1) Firestore e save
    await db.collection('contacts').add({
      ...data,
      createdAt: new Date(),
    });

    // 2) Email pathao
    try {
      await sendOwnerEmail(data);
    } catch (emailErr) {
      console.error('Email send error:', emailErr);
      // Save hoyeche, kintu email fail — user ke success-i dekhacchi
      return NextResponse.json(
        { message: 'DB te save hoyeche, kintu owner er email jay nai.' },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: 'DB te save + email pathano hoyeche!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { message: 'Save korte somossa.', error: error.message },
      { status: 500 }
    );
  }
}
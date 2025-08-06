import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        // Parse the JSON request body
        const { name, contact, projectType, projectName, projectCategory, details } = await req.json();
        // Basic validation
        if (!name || !contact || !projectType || !projectName || !projectCategory || !details) {
            return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
        }

        // Create a new Purchase record in the database
        const newPurchase = await prisma.purchase.create({
            data: {
                name,
                contact,
                projectType,
                projectName,
                projectCategory,
                details,
            },
        });

        // Return the created purchase with a 201 status
        return new Response(JSON.stringify(newPurchase), { status: 201 });
    } catch (error) {
        console.error('Error creating purchase:', error);
        return new Response(JSON.stringify({ error: 'Error creating purchase' }), { status: 500 });
    }
}

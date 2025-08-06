// /src/app/api/subscription/route.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
	try {
		const subscriptions = await prisma.subscription.findMany();
		return new Response(JSON.stringify(subscriptions), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Error fetching subscriptions' }), { status: 500 });
	}
}

export async function POST(req) {
	try {
		const { email } = await req.json();
		if (!email) {
			return new Response(JSON.stringify({ error: 'Email is required' }), { status: 400 });
		}

		const newSubscription = await prisma.subscription.create({
			data: { email },
		});
		return new Response(JSON.stringify(newSubscription), { status: 201 });
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Error creating subscription' }), { status: 500 });
	}
}
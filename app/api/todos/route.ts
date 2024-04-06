import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const todos = await db.todos.findMany({
			orderBy: {
				created_at: 'desc',
			},
		});
		if (!todos) {
			return new NextResponse('No data found', { status: 404 });
		}
		return new NextResponse(JSON.stringify(todos), { status: 200 });
	} catch (err) {
		console.log('[API/TODOS GET] - ', err);
		return new NextResponse('Something went wrong!', { status: 500 });
	}
}

export async function POST(req: Request) {
	try {
		const { title, complete } = (await req.json()) as {
			title: string;
			complete: boolean;
		};

		const newTodo = await db.todos.create({
			data: {
				title,
				complete,
			},
		});

		return new NextResponse(JSON.stringify(newTodo), { status: 200 });
	} catch (err) {
		console.log('[API/TODOS POST] - ', err);
		return new NextResponse('Something went wrong!', { status: 500 });
	}
}

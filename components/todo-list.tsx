import { CircleCheckBig, CircleX } from 'lucide-react';
import { headers } from 'next/headers';

type Todos = {
	id: number;
	title: string;
	complete: boolean;
}[];

const getTodos = async () => {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/todos`, {
			headers: headers(),
			cache: 'no-store',
		});
		return res.json();
	} catch (err) {
		throw err;
	}
};

export const TodoList = async () => {
	const todos: Todos = await getTodos();

	return (
		<div className="flex flex-col gap-2 w-full mt-5">
			{todos.map((todo) => (
				<div key={todo.id} className="flex justify-between p-4 border-2">
					<div>{todo.title}</div>
					<div>
						{todo.complete ? (
							<CircleCheckBig className="text-emerald-700" />
						) : (
							<CircleX className="text-destructive" />
						)}
					</div>
				</div>
			))}
		</div>
	);
};

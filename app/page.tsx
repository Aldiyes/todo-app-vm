import { TodoForm } from '@/components/todo-form';
import { TodoList } from '@/components/todo-list';

export default function Home() {
	return (
		<main className="h-full w-full flex flex-col items-center justify-center">
			<div className="w-96 gap-5 mt-4">
				<TodoForm />
				<TodoList />
			</div>
		</main>
	);
}

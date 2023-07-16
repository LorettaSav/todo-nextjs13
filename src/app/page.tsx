import Link from "next/link";
import { prisma } from "./db";
import TodoItem from "@/components/TodoItem";

const getTodos = () => {
  return prisma.todo.findMany();
};


async function toggleTodo(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
}

async function deleteTodo( id: string) {
    "use server"
  await prisma.todo.delete({ where: { id } });
  
  
}

export default async function Home() {
  const todos = await getTodos();
  

  return (
    <>
      <header className=" mb-4">
        <h1 className="text-5xl"> Todos</h1>
      </header>
      <ul className="pl-4 ">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))}
      </ul>
      <div className="mt-10">

        <Link
          href="/new"
          className="border border-slate-300 text-slate-100 px-2 py-1
          rounded hover:bg-green-400 hover:text-black focus-within:bg-slate-700 outline-none"
        >
          New Todo
        </Link>
      </div>
    </>
  );
}

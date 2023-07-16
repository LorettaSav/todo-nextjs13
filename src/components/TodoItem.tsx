"use client";

import Link from "next/link";

//because of the onChange we need to have some type of interaction
//so this component cant be on the server

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

export default function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {

   
  return (
    <>
      <li className="flex gap-1 items-center mt-2">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className="peer-checked:line-through peer-checked:text-slate-200"
        >
          {title}
        </label>
        
          <Link
            href="/"
            className="ml-4 border border-slate-300 text-slate-300 text-sm px-2 py-1 
                rounded hover:bg-green-400 hover:text-black 
                focus-within:bg-green-600 outline-none"
            onClick={(e) => deleteTodo(id)}
          >
            Delete
          </Link>
        
      </li>
    </>
  );
}

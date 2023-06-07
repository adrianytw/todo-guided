"use client";

import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", text: "Learn Next.js", completed: false },
    { id: "2", text: "Learn React", completed: false },
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1>Todos</h1>
      <div id="todos">
        {todos.map((todo) => (
          <div key={todo.id} className="flex items-center">
            <input type="checkbox" />
            <span>{todo.text}</span>
          </div>
        ))}
      </div>
    </main>
  );
}

import React from "react";
import TodoCard from "@/components/share/TodoCard";
import { createTodo, getAllTodos } from "@/database/prisma-db";
import { redirect } from "next/navigation";

const TodosPage = async () => {
  const todos = await getAllTodos();

  // Server action for creating a new todo
  async function handleCreateTodo(formData: FormData) {
    "use server";
    const task = formData.get("task") as string;
    if (task?.trim()) {
      await createTodo(task);
    }
    redirect("/todos");
  }

  return (
    <main className="bg-green-50 p-4 w-full min-h-screen">
      <h1 className="p-4 text-center text-2xl font-semibold underline underline-offset-8">
        Todo Page
      </h1>
      <section className="flex justify-center p-4">
        <form
          className="py-3 px-10 rounded-2xl bg-green-200 w-full  sm:w-[400px] flex flex-col sm:flex-row  items-center gap-4"
          action={handleCreateTodo}
        >
          <input
            type="text"
            name="task"
            id="Task"
            placeholder="Enter Task Here"
            className="p-2 border border-green-300 rounded-2xl w-full"
            required
            aria-label="Task"
          />
          <input
            className="text-red-500 text-base ms-3"
            type="submit"
            value="Add Todo"
          />
        </form>
      </section>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 my-3">
          {todos?.map((todo) => (
            <TodoCard
              key={todo.id}
              {...todo}
              completed={todo.completed ?? false}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default TodosPage;

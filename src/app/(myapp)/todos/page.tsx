import { createTodo, getAllTodos } from "@/database/prisma-db";
import { redirect } from "next/navigation";
import React from "react";

const TodosPage = async () => {
  const formCreateTodo = async (formData: FormData) => {
    "use server";
    const task = formData.get("task") as string;
    // console.log({ task });
    await createTodo(task);
    redirect("/todos");
  };

  const todos = await getAllTodos();
  console.log(todos);

  return (
    <React.Fragment>
      <main className="bg-green-50 p-4 w-full min-h-screen ">
        <p className="p-4 text-center text-2xl font-semibold  underline underline-offset-8">
          Todo Page
        </p>
        <section className="flex justify-center p-4">
          <form
            className="py-3 px-10 rounded-2xl bg-green-200 w-[400px] flex items-center gap-4"
            action={formCreateTodo}
          >
            <div>
              <label htmlFor="Task">
                <input
                  type="text"
                  name="task"
                  id="Task"
                  placeholder="Enter Task Here"
                  className="p-2 border border-green-300 rounded-2xl"
                />
              </label>
            </div>
            <div>
              <input
                className="text-red-500 text-base ms-3"
                type="submit"
                value="Add Todo"
              />
            </div>
          </form>
        </section>

        {/* todos */}
        <section>
          <ul>
            {todos.map((t) => (
              <li key={t.id}>{t.task}</li>
            ))}
          </ul>
        </section>
      </main>
    </React.Fragment>
  );
};

export default TodosPage;

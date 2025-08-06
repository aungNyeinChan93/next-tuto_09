'use server'

import { prisma } from "@/database/prisma-db";
import { redirect } from "next/navigation";

// todos
export const deleteTodo = async (formData: FormData) => {
    const id = formData.get("todoId") as string;
    await prisma.todo.delete({
        where: {
            id: Number(id),
        },
    });
    redirect("/todos");
};

export const updateTodo = async (formdate: FormData) => {
    const id = formdate.get("todoId");
    const status = formdate.get("status");
    await prisma.todo.update({
        where: {
            id: Number(id),
        },
        data: {
            completed: status === 'true' ? false : true,
        },
    });
    redirect("/todos");
};
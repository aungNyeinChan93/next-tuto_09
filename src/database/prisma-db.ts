// import { PrismaClient } from "@prisma/client/extension";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();


export const getUsers = async () => {
    const users = await prisma.user.findMany();
    return users
}


export const createUser = async (name: string, email: string) => {
    const user = await prisma.user.create({
        data: {
            name, email
        }
    });
    return user
}
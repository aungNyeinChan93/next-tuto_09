
// import { PrismaClient } from "@prisma/client/extension";
import { PrismaClient } from "@/generated/prisma";

export const prisma = new PrismaClient();

// async function main() {

//     // 
//     // await createMovie();

// }

// main().then(async () => await prisma.$disconnect()).then(async (err) => {
//     console.log(err)
//     prisma.$disconnect();
//     process.exit(1)
// })

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


// movies
export const createMovie = async () => {
    const movie = await prisma.movie.create({
        data: {
            name: 'Test Name 1',
            description: "Test Desc 1",
            genre: 'Test Genre 1',
            releaseDate: new Date('10/10/1993'),
            rating: 9.9
        }
    });
    console.log(movie);
};

// type Todo = {
//     id: number,
//     task: string,
//     completed: boolean,
//     createdAt: string | null,
//     updateAt: string | null
// }

//  create todo

export const createTodo = async (task: string) => {
    const newTodo = await prisma.todo.create({
        data: {
            task: task
        }
    });
    // console.log(newTodo);
    return newTodo
}

// get all todos
export const getAllTodos = async () => {
    const todos = await prisma.todo.findMany();
    return todos
}
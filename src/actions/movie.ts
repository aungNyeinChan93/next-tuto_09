'use server'

import { prisma } from "@/database/prisma-db";
import { redirect } from "next/navigation";
// import { type Movie } from "@/generated/prisma";


export const createMovie = async (formData: FormData) => {
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const image = formData.get('image') as string;
    const genre = formData.get('genre') as string;
    // const rating = formData.get('rating') as Number;
    // const releaseDate = formData.get('releaseDate') as string;

    const movie = await prisma.movie.create({
        data: {
            name: name,
            description,
            image,
            genre,
            // releaseDate,
            // rating
        }
    })

    console.log(movie);
    redirect('/movies')
}

// get all movies
export const getAllMovies = async () => {
    const movies = await prisma.movie.findMany({
        select: {
            name: true,
            description: true,
            genre: true,
            image: true,
            id: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    return movies
}


export const deleteMovie = async (formData: FormData) => {
    const id = formData.get('id') as string;

    await prisma.movie.delete({
        where: {
            id: id
        }
    })

    redirect('/movies')
}
import { getAllMovies } from "@/actions/movie";
import MovieCard from "@/components/share/MovieCard";
import Link from "next/link";
import React from "react";

const MoviesPage = async () => {
  const movies = await getAllMovies();
  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-violet-200 p-4">
        <section className="flex justify-between p-4 items-center mb-2">
          <h3 className="text-3xl text-cyan-600 font-semibold underline underline-offset-8 decoration-red-400 ">
            All Movies
          </h3>
          <div>
            <Link
              className="px-4 py-2 rounded-md bg-cyan-400 hover:bg-amber-200"
              href={"/movies/create"}
            >
              Create Movie
            </Link>
          </div>
        </section>

        {/* movies section */}

        <section className="lg:ms-[60px] ">
          <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 space-y-9 mt-9">
            {movies &&
              Array.isArray(movies) &&
              movies?.map((movie) => <MovieCard key={movie.id} {...movie} />)}
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default MoviesPage;

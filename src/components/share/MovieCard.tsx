/* eslint-disable @next/next/no-img-element */
import { deleteMovie } from "@/actions/movie";
import Link from "next/link";
import React from "react";

interface MovieCardProps {
  id: string | undefined;
  name: string | undefined;
  description: string | undefined;
  image: string | null;
  genre: string | null;
}

const MovieCard = async ({
  name,
  description,
  image,
  id,
  genre,
}: MovieCardProps) => {
  return (
    <React.Fragment>
      <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
          <img
            src={image ?? ""}
            className=" object-cover object-center"
            alt="image"
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            <p className="text-sm ">
              {genre} - {name}
            </p>
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description}
          </p>
        </div>
        <div className="p-6 pt-0 text-start flex justify-around">
          <button
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Read More
          </button>
          <form action={deleteMovie}>
            <input type="hidden" name="id" value={id} />
            <button
              type="submit"
              data-ripple-light="true"
              className="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ms-3"
            >
              Delete
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieCard;

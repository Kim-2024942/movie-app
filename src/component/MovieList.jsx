import React from "react";

export default function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">
        No movies found. Try searching for something else 🎥
      </div>
    );
  }

  return (
    <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mt-10 w-full max-w-7xl">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="relative group bg-gray-900 rounded-2xl overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
        >
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.jpg"}
            alt={movie.Title}
            className="w-full h-80 object-cover group-hover:opacity-80 transition-all"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end p-4">
            <h2 className="text-lg font-semibold">{movie.Title}</h2>
            <p className="text-sm text-gray-300">{movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

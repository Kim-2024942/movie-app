import React from "react";
import { Film } from "lucide-react";

export default function Header() {
  return (
    <header className="text-center mt-10">
      <div className="flex justify-center items-center gap-2 text-4xl font-bold text-red-600">
        <Film className="w-8 h-8" />
        <h1>MovieList</h1>
      </div>
      <p className="text-gray-500 dark:text-gray-400 mt-2">
        Find and explore your favorite movies instantly 🍿
      </p>
    </header>
  );
}

import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 py-6 text-center text-gray-500 dark:text-gray-400 border-t border-gray-700">
      © {new Date().getFullYear()} MovieList by KIM🎬
    </footer>
  );
}

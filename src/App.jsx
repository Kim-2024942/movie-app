import { useState, useEffect } from "react";
import SearchBar from "./component/SearchBar";
import MovieList from "./component/MovieList";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "./index.css";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=a2355c5f";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Avengers");

  const fetchMovies = async () => {
    if (!searchTerm.trim()) {
      setMovies([]);
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}&s=${encodeURIComponent(searchTerm)}`
      );
      const data = await response.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center text-gray-800 dark:text-gray-100 transition-colors duration-500 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900 to-gray-800 -z-10"></div>

      {/* Floating cinematic particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 bg-red-700 rounded-full opacity-20 absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <Header />

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={fetchMovies}
        />

        <div className="w-full flex justify-center mt-8">
          <MovieList movies={movies} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

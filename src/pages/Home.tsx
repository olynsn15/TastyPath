import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  // state, function to set state
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {
      id: 1,
      title: "Tim's Film",
      overview: "Test movie",
      release_date: "2024",
      poster_path: "/test.jpg",
    },
    {
      id: 2,
      title: "Lili's Film",
      overview: "Test movie 2",
      release_date: "2020",
      poster_path: "/test.jpg",
    },
  ];

  const handleSearch = () => {
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;

import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  // state, function to set state
  // persisting state so the value wont change everytime a change occurs
  // state will be resetted when page is refreshed
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

  // changing states
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("-----");
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
        {movies.map(
          // search
          // when a state change occurs, entire components is re rendered
          (movie) => (
            <MovieCard movie={movie} key={movie.id} />
          )
        )}
      </div>
    </div>
  );
}

export default Home;

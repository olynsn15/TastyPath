import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";
import type { Movie } from "../types/movie";

function Home() {
  // state, function to set state
  // persisting state so the value wont change everytime a change occurs
  // state will be resetted when page is refreshed
  const [searchQuery, setSearchQuery] = useState("");

  // use effect
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // if any change happens to the array, we will re run the operation
  // it is empty now so it will only run one time in the beginning
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        setError("Failed to load movies...");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

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

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            // search
            // when a state change occurs, entire components is re rendered
            (movie) => (
              <MovieCard movie={movie} key={movie.id} />
            )
          )}
        </div>
      )}

      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default Home;

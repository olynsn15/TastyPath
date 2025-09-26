import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div>
        <h2 className="favorites">Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map(
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

  return (
    <div className="favorites-empty">
      <h2>No favorite movies yet</h2>
      <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  );
}

export default Favorites;

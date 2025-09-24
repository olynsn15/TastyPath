import type { Movie } from "../types/movie";
import "../css/MovieCard.css";

type MovieCardProps = {
  movie: Movie;
};

// so in a nutshell, {movie} ini sebenarnya prop object
// {movie} means we want to take out movie property out of the prop object and make a variable named movie
// kalau kita langsung {movie} : Movie kita set props nya sebagai si Movie objectnya langsung
// dan itu gabisa karena kita mau keluarin movie property dari prop object

function MovieCard({ movie }: MovieCardProps) {
  function onFavoriteClick() {
    alert("clicked");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.poster_path} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;

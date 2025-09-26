import type { Movie } from "../types/movie";
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import type { MouseEvent } from "react";

type MovieCardProps = {
  movie: Movie;
};

// so in a nutshell, {movie} ini sebenarnya prop object
// {movie} means we want to take out movie property out of the prop object and make a variable named movie
// kalau kita langsung {movie} : Movie kita set props nya sebagai si Movie objectnya langsung
// dan itu gabisa karena kita mau keluarin movie property dari prop object

function MovieCard({ movie }: MovieCardProps) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    // passing in the movie id to be checked
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;

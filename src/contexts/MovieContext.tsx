import {
  createContext,
  useState,
  useContext,
  useEffect,
  type ReactNode,
} from "react";
import type { Movie } from "../types/movie";

interface MovieContextType {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useMovieContext = (): MovieContextType => {
  const context = useContext(MovieContext);
  if (!context)
    throw new Error("useMovieContext must be used within a MovieProvider");
  return context;
};

interface MovieProviderProps {
  children: ReactNode;
}

// provide state to any of the components wrapped inside it
// browser router is one of the example of context
// children is anything inside of the component
export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  // local storage
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");

    if (storedFavs) setFavorites(JSON.parse(storedFavs)); // converting back to an array
  }, []);

  useEffect(() => {
    // anytime favorite list changes, we want to update the favorites in local storage
    // only runs when favorite changes
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // add favorites
  const addToFavorites = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  // remove favorites
  const removeFromFavorites = (movieId: number) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  // check favorites
  const isFavorite = (movieId: number) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = { favorites, addToFavorites, removeFromFavorites, isFavorite };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

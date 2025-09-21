import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  const movieNumber = 1;

  return (
    <>
      {movieNumber === 1 ? (
        <MovieCard
          movie={{
            id: 1,
            title: "Tim's Film",
            overview: "Test movie",
            release_date: "2024",
            poster_path: "/test.jpg",
          }}
        />
      ) : (
        <MovieCard
          movie={{
            id: 2,
            title: "Jon's Film",
            overview: "Test movie",
            release_date: "2024",
            poster_path: "/test.jpg",
          }}
        />
      )}
    </>
  );
}

export default App;

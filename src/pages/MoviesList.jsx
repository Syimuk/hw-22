import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../store/movieSlice";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Button from "../components/Button";

const MoviesList = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <h2>Список фильмов</h2>
      <Link to="/createMovie">
        <Button>Создать</Button>
      </Link>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;

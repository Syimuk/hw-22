import styled from "styled-components";
import Button from "./Button";
import LikeButton from "./LikeButton";
import { useDispatch } from "react-redux";
import { removeMovie, toggleLike } from "../store/movieSlice";

const Card = styled.div`
  border: 1px solid gray;
  padding: 10px;
  text-align: center;
`;

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <img src={movie.image} alt={movie.title} width="300" height="260" />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.rating}</p>
      <LikeButton liked={movie.liked} onClick={() => dispatch(toggleLike(movie.id))} />
      <Button danger onClick={() => dispatch(removeMovie(movie.id))}>DELETE</Button>
    </Card>
  );
};

export default MovieCard;

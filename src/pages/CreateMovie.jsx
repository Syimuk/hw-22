import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../store/movieSlice";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const CreateMovie = () => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreate = () => {
    if (title && rating && image) {
      dispatch(addMovie({ title, rating, image, liked: false })).then(() => {
        navigate("/movies");
      });
    }
  };

  return (
    <div>
      <h2>Добавить фильм</h2>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Название" />
      <Input value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Рейтинг" />
      <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Ссылка на изображение" />
      <Button onClick={handleCreate}>Создать</Button>
      <Button danger onClick={() => navigate("/movies")}>Отмена</Button>
    </div>
  );
};

export default CreateMovie;

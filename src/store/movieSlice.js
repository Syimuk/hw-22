import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://c0118f55b9fe4a75.mokky.dev/films";

// Получение фильмов
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// Добавление фильма
export const addMovie = createAsyncThunk("movies/addMovie", async (movie) => {
  const response = await axios.post(API_URL, movie);
  return response.data;
});

// Удаление фильма
export const removeMovie = createAsyncThunk("movies/removeMovie", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// Обновление лайка на сервере
export const toggleLike = createAsyncThunk("movies/toggleLike", async (id, { getState }) => {
  const movie = getState().movies.movies.find((m) => m.id === id);
  if (!movie) return;

  const updatedMovie = { ...movie, liked: !movie.liked };
  await axios.patch(`${API_URL}/${id}`, updatedMovie);
  return updatedMovie;
});

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.movies.push(action.payload);
      })
      .addCase(removeMovie.fulfilled, (state, action) => {
        state.movies = state.movies.filter((movie) => movie.id !== action.payload);
      })
      .addCase(toggleLike.fulfilled, (state, action) => {
        const index = state.movies.findIndex((m) => m.id === action.payload.id);
        if (index !== -1) {
          state.movies[index] = action.payload;
        }
      });
  },
});

export default movieSlice.reducer;

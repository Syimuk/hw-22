import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MoviesList from "./pages/MoviesList";
import CreateMovie from "./pages/CreateMovie";

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/movies" />} />
      <Route path="/createMovie" element={<CreateMovie />} />
      <Route path="/movies" element={<MoviesList />} />
    </Routes>
  );
}

export default App;

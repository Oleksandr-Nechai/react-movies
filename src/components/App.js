import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import MovieDetails from 'pages/MovieDetails';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

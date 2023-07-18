import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';

// const Home = lazy(() => import('../pages/Home' /* webpackChunkName: "Home" */));
const Movies = lazy(() =>
  import('../pages/Movies' /* webpackChunkName: "Movies" */)
);
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails' /* webpackChunkName: "MovieDetails" */)
);
const NotFound = lazy(() =>
  import('../pages/NotFound' /* webpackChunkName: "NotFound" */)
);
const Cast = lazy(() =>
  import('components/Cast' /* webpackChunkName: "Cast" */)
);
const Reviews = lazy(() =>
  import('components/Reviews' /* webpackChunkName: "Reviews" */)
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:slug" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />;
    </Routes>
  );
}

export default App;

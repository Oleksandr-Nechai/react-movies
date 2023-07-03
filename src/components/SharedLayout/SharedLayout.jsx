import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader';
// import ErrorBoundary from 'components/ErrorBoundary';

import { ListPages, ListItem, Link } from './SharedLayout.styled';

function SharedLayout() {
  return (
    <>
      <header>
        <nav>
          <ListPages>
            <ListItem>
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link to="/movies">Movies</Link>
            </ListItem>
          </ListPages>
        </nav>
      </header>
      <main>
        {/* <ErrorBoundary> */}
        <Suspense fallback={<Loader gap={'100px'} />}>
          <Outlet />
        </Suspense>
        {/* </ErrorBoundary> */}
      </main>
    </>
  );
}

export default SharedLayout;

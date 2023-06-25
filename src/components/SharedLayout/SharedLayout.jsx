import { Outlet } from 'react-router-dom';

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
        <Outlet />
      </main>
    </>
  );
}

export default SharedLayout;

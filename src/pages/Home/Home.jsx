import { useMovieData } from 'hooks';

import MoviesList from 'components/MoviesList';
import BadRequest from 'components/BadRequest';
import Section from 'components/Section';
import Loader from 'components/Loader';

function Home() {
  const [movieInfo, visible, error] = useMovieData('trending');

  const results = movieInfo ? movieInfo.results : null;
  // console.log(results);

  return (
    <>
      {!visible && (results || error) && (
        <Section>
          <h1>Trending movies today</h1>
        </Section>
      )}
      {visible && <Loader visible={visible} gap={'100px'} />}
      {results?.length > 0 && (
        <MoviesList movies={results} name={`to the trending page`} />
      )}
      {error && <BadRequest error={error} />}
    </>
  );
}

export default Home;

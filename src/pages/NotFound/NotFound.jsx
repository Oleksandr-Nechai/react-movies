import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ErrorPage from 'components/ErrorPage';

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    const timerId = setTimeout(
      () => navigate('/', { replace: true }),
      10000
    );
    return () => clearTimeout(timerId);
  }, [navigate]);
  return <ErrorPage />;
}

export default NotFound;

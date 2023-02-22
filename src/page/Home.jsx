import { useEffect, useState } from 'react';
// import { useLocation, NavLink } from 'react-router-dom';
import { fetchTrending } from 'services/fetchApi';
import MovieList from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import NotFound from './NotFound';
import { Container } from 'components/Container/Container.styled';

export default function Home() {
  const [trends, setTrends] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const page = 1;

  useEffect(() => {
    setStatus('pending');
    fetchTrending(page)
      .then(data => {
        setTrends(data.results);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error.message);
        setStatus('rejected');
      });
  }, [page]);
  return (
    <Container>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <MovieList movies={trends}></MovieList>}
      {status === 'rejected' && <NotFound message={error} />}
    </Container>
  );
}

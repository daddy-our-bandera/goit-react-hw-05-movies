import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { fetchMovies } from 'services/fetchApi';
import SearchInput from 'components/SearchInput/SearchInput';
import NotFound from './NotFound';
import { Container } from 'components/Container/Container.styled';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  const [status, setStatus] = useState('idle');

  const [searchParams, setSearchParams] = useSearchParams('');
  const movieName = searchParams.get('query') ?? '';
  const currentPage = Number(searchParams.get('page'))
    ? Number(searchParams.get('page'))
    : 1;

  useEffect(() => {
    if (!movieName) return;

    setStatus('pending');
    fetchMovies(movieName, currentPage)
      .then(data => {
        if (!data.results.length) {
          return alert('not results');
        } else {
          setMovies([...data.results]);
          setStatus('resolved');
        }
      })
      .catch(setStatus('reject'));
  }, [currentPage, movieName]);

  const handleFormSubmit = query => {
    setSearchParams({ query });
    setStatus('idle');
  };
  return (
    <Container>
      <SearchInput onSubmit={handleFormSubmit} />
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <MovieList movies={movies} />}
      {status === 'rejected' && <NotFound />}
    </Container>
  );
}

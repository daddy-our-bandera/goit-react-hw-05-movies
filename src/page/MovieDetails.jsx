import { useEffect, Suspense, useState, useRef } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';

import { fetchMovieById } from 'services/fetchApi';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { BackLink } from 'components/BackLink/BackLink.styled';
import { Container } from 'components/Container/Container.styled';
import { Loader } from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');

  const { movieId } = useParams();

  const navigate = useLocation();
  const backLink = useRef(navigate.state?.from ?? '/');

  useEffect(() => {
    setStatus('pending');

    fetchMovieById(movieId)
      .then(data => {
        setMovie(data);
        document.title = `My Movies | ${data.title}`;
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
      });
  }, [movieId]);

  return (
    <Container>
      <BackLink to={backLink.current}>Go back</BackLink>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <MovieInfo movie={movie} />}
      {status === 'rejected' && <ErrorMessage />}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}

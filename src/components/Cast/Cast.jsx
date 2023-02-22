import { useEffect, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';

import { fetchCastById } from 'services/fetchApi';
import ActorCard from 'components/ActorCard/ActorCard';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { Loader } from 'components/Loader/Loader';
import { CastList } from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    setStatus('pending');

    fetchCastById(params.movieId)
      .then(data => {
        setCast(data.cast);
        setStatus('resolved');
      })
      .catch(error => {
        setError('Something went wrong. Try again.');
        setStatus('rejected');
      });
  }, [params.movieId]);

  return (
    <div>
      {status === 'pending' && <Loader />}
      {!cast.length ? (
        <h1>cast not found</h1>
      ) : (
        status === 'resolved' && (
          <CastList>
            {cast.map(actor => (
              <li key={actor.cast_id}>
                <NavLink to={`/actors/${actor.id}`} state={{ from: location }}>
                  <ActorCard actor={actor} />
                </NavLink>
              </li>
            ))}
          </CastList>
        )
      )}

      {status === 'rejected' && <ErrorMessage message={error} />}
    </div>
  );
}

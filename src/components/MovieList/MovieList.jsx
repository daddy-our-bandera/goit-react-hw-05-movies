import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { Item, List, OnLink, Image } from './MovieList.styled';
import NotImage from '../Images/NotImage.jpg';

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <OnLink to={`/movie/${movie.id}`} state={{ from: location }}>
            <Image
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                  : NotImage
              }
              alt={movie.title}
            />
          </OnLink>
        </Item>
      ))}
    </List>
  );
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};

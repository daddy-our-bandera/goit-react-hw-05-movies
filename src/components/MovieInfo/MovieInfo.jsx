import PropTypes from 'prop-types';
import NotImage from '../Images/NotImage.jpg';
import { LinkContainer, MovieSection, StyledLink } from './MovieInfo.styled';

export const MovieInfo = ({ movie }) => {
  const {
    title,
    name,
    release_date,
    vote_average,
    poster_path,
    overview,
    genres,
  } = movie;
  return (
    <MovieSection>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w200/${poster_path} `
              : NotImage
          }
          alt={title}
        />
        <ul>
          <li>{title}</li>
          <li>{name}</li>
          <li>{release_date}</li>
          <li>{vote_average}</li>
          <li>{overview}</li>
        </ul>
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>{name} </li>
          ))}
        </ul>
      </div>
      <LinkContainer>
        <StyledLink to="cast">Cast</StyledLink>
        <StyledLink to="reviews">Revievs</StyledLink>
      </LinkContainer>
    </MovieSection>
  );
};
MovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};

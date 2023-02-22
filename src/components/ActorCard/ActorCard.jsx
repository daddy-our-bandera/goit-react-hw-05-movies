import NotImage from '../Images/NotImage.jpg';

export default function ActorCard({ actor }) {
  return (
    <img
      width="200"
      src={
        actor.profile_path
          ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
          : NotImage
      }
      alt={actor.name}
    />
  );
}

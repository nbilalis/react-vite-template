import { useState } from 'react';
import PropTypes from 'prop-types';

import './MovieCard.scoped.scss';

function MovieCard({ movie }) {
  const [likes, setLikes] = useState(0);

  const randomKey = Math.random().toString(36).slice(2);
  const imageUrl = `https://picsum.photos/200/250?cb=${randomKey}`;

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>
        Genres:{' '}
        {movie.genres.map((g) => (
          <span key={g} className="genre">
            {g}
          </span>
        ))}
      </p>
      <p>Year: {movie.year}</p>
      <p>Rating: {movie.rating}</p>
      <p>Earnings: ${movie.sum}</p>
      <p>
        Likes: {likes}
        <button
          className="like-button"
          onClick={() => {
            setLikes((likes) => likes + 1);
          }}
        >
          ♥
        </button>
      </p>
    </div>
  );
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    sum: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;

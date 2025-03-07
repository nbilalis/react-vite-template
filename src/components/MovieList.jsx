import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

import './MovieList.scoped.scss';

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdb_id} movie={movie} />
      ))}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdb_id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(PropTypes.string).isRequired,
      year: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      sum: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default MovieList;

import MovieList from './components/MovieList';

import movies from './data/movies.json';

import './App.scoped.scss';

function App() {
  const top_movies = movies.sort((a, b) => b.rating - a.rating).slice(0, 3);
  const top_grossing_movies = movies.sort((a, b) => b.sum - a.sum).slice(0, 3);

  return (
    <>
      <h1>Box Office</h1>
      <MovieList movies={movies} />

      <h2>Top Movies</h2>
      <MovieList movies={top_movies} />

      <h2>Top Grossing Movies</h2>
      <MovieList movies={top_grossing_movies} />
    </>
  );
}

export default App;

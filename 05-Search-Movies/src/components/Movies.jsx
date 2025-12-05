function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li className='movie' key={movie.id}>
<<<<<<< HEAD
            <header className='info_movies'>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
            </header>
=======
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
>>>>>>> 1049a5305a73437a1b26910e0ab5cf4d546faa4d
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoMoviesResults () {
  return (
    <p>No se encontraron peliculas para esta busqueda</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults />
  )
}

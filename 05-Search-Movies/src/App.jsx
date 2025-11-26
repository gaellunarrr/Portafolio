import './App.css'
import { useEffect, useState } from 'react'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useSearch } from './hooks/useSearch'

function App () {
  const { movies } = useMovies()
  const { search, updatedSearch, error } = useSearch()
  
  const handleSubmit = (event) => {
    event.preventDefault() // <--- No recargues la página cunando envie el formulario
    console.log({ search })
  }

  const handleChange = (event) => {
    updatedSearch(event.target.value)
  }


  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Avengers, StarWars, Dune...' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App

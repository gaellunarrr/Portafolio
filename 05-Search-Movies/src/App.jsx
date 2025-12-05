/* eslint-disable react-hooks/use-memo */
import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useSearch } from './hooks/useSearch'
import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { search, updatedSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 500)
    , [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault() // <--- No recargues la página cunando envie el formulario
    getMovies()
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updatedSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Avengers, StarWars, Dune...' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App

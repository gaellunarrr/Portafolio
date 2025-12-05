import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [error, setError] = useState(null)
  const [search, updatedSearch] = useState('')
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La busqueda debe tener al menos de 3 caracteres')
      return
    }

    setError(null)
  }, [search]
  )
  return { search, updatedSearch, error }
}

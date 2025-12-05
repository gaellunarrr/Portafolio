<<<<<<< HEAD
import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [error, setError] = useState(null)
  const [search, updatedSearch] = useState('')
=======
import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, updatedSearch] = useState('')
  const [error, setError] = useState(null)
>>>>>>> 1049a5305a73437a1b26910e0ab5cf4d546faa4d
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
<<<<<<< HEAD
  }, [search]
  )
=======
  }, [search])

>>>>>>> 1049a5305a73437a1b26910e0ab5cf4d546faa4d
  return { search, updatedSearch, error }
}

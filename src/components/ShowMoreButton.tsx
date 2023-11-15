'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Place } from '../../types'
import spinner from '../assets/spinner.gif'
import Image from 'next/image'

interface Props {
  page: number
  setPage: Dispatch<SetStateAction<number>>
  placesList: Place[]
  setPlacesList: Dispatch<SetStateAction<Place[]>>
  totalPages: number
  route: string
  color: string
}

const ShowMoreButton = ({
  page,
  setPage,
  placesList,
  setPlacesList,
  totalPages,
  route,
  color
}: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Busca mais lugares
    const showMore = async () => {
      try {
        setHasError(false)
        setIsLoading(true)
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/${route}?page=${page}`
        )
        const data = await res.json()
        const { places } = data
        setPlacesList(prev => [...prev, ...places])
      } catch (e) {
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }
    if (page !== 1) {
      showMore()
    }
  }, [page, route, setPlacesList])

  return (
    <>
      {page < totalPages &&
        placesList.length >= 12 &&
        !isLoading &&
        !hasError && (
          <button
            className="w-[100px] text-white block m-auto p-2 rounded-sm shadow-lg hover:bg-opacity-90"
            style={{ background: color }}
            onClick={() => setPage(prev => prev + 1)}
          >
            Ver mais
          </button>
        )}
      {/* Carregando mais lugares */}
      {isLoading && !hasError && (
        <Image src={spinner} width={200} alt="spinner" className="m-auto" />
      )}
      {/* Ocorreu um erro ao buscar mais lugares */}
      {hasError && (
        <button
          className="w-[150px] text-white bg-red-600 block m-auto p-2 rounded-sm shadow-lg hover:bg-opacity-90"
          onClick={() => setPage(page)}
        >
          Tente novamente
        </button>
      )}
    </>
  )
}

export default ShowMoreButton

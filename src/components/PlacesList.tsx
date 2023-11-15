'use client'

import { Place } from '../../types'
import SearchForm from './SearchForm'
import PlaceItem from './PlaceItem'
import { useState } from 'react'
import ShowMoreButton from './ShowMoreButton'

interface Props {
  categories: string[]
  places: Place[]
  totalPages: number
  type: string
  color: string
}

const PlacesList = ({ categories, places, totalPages, type, color }: Props) => {
  const [placesList, setPlacesList] = useState(places)
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  let route: string
  if (type === 'atracoes') {
    route = 'attractions'
  } else if (type === 'gastronomia') {
    route = 'eateries'
  } else {
    route = 'accomodations'
  }

  return (
    <section className="py-12 px-8">
      <div className="max-w-7xl m-auto">
        {
          <SearchForm
            route={route}
            places={placesList}
            setPlacesList={setPlacesList}
            categories={categories}
            setIsLoading={setIsLoading}
            setHasError={setHasError}
          />
        }
        {/* Buscando lista */}
        {isLoading && !hasError && <p>Carregando...</p>}
        {/* Ocorreu um erro na busca */}
        {!isLoading && hasError && (
          <p className="text-red-600">Ocorreu um erro</p>
        )}
        {/* Lista retorna vazia */}
        {!isLoading && !hasError && placesList.length === 0 && (
          <span>Nenhum lugar encontrado</span>
        )}
        {!isLoading && !hasError && placesList.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {placesList.map(place => (
              <PlaceItem key={place._id} place={place} type={type} />
            ))}
          </div>
        )}
        {!isLoading && !hasError && (
          <ShowMoreButton
            page={page}
            setPage={setPage}
            placesList={placesList}
            setPlacesList={setPlacesList}
            totalPages={totalPages}
            route={route}
            color={color}
          />
        )}
      </div>
    </section>
  )
}

export default PlacesList

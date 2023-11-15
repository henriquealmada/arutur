'use client'

import { Dispatch, FormEvent, useRef } from 'react'
import { SetStateAction } from 'react'
import { Place } from '../../types'
import { AiOutlineSearch } from 'react-icons/ai'

interface Props {
  route: string
  places: Place[]
  setPlacesList: Dispatch<SetStateAction<Place[]>>
  categories: string[]
  setIsLoading: Dispatch<SetStateAction<boolean>>
  setHasError: Dispatch<SetStateAction<boolean>>
}

const SearchForm = ({
  route,
  setPlacesList,
  categories,
  setIsLoading,
  setHasError
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  // Faz a requisição
  const makeRequest = async (url: string) => {
    try {
      setHasError(false)
      setIsLoading(true)
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/` + url)
      const { places } = await res.json()
      setPlacesList(places)
    } catch (error) {
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }

  // Busca por categoria
  const searchByCategory = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value
    makeRequest(`${route}${'/category?cat=' + selectedCategory}`)
  }

  // Busca por nome
  const searchByName = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const value = inputRef!.current!.value
    if (!value) return
    makeRequest(`${route}/search?q=${value}`)
  }

  return (
    <form
      onSubmit={searchByName}
      className="flex flex-col sm:flex-row items-center gap-4 mb-4 lg:w-2/3"
    >
      <div className="flex items-center w-full shadow-[0px_2px_4px_2px_rgba(0,0,0,0.3)] rounded-s-full rounded-e-full hover:shadow-[0px_2px_4px_3px_rgba(0,0,0,0.3)]">
        <input
          className="py-2 px-4 w-full rounded-s-full outline-none"
          type="text"
          placeholder="Busque um lugar"
          aria-label="input"
          ref={inputRef}
        />
        <button
          className="bg-[#232323] text-white text-2xl py-[9px] px-2 rounded-e-full w-14"
          aria-label="botão"
        >
          <AiOutlineSearch className="m-auto" />
        </button>
      </div>
      <select
        className="p-2 shadow-[0px_2px_4px_1px_rgba(0,0,0,0.3)] outline-none rounded-md"
        aria-label="select"
        defaultValue={'DEFAULT'}
        onChange={e => searchByCategory(e)}
      >
        <option value="DEFAULT" disabled hidden>
          Selecione uma categoria
        </option>
        {categories?.map((category, index) => (
          <option className="capitalize" key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </form>
  )
}

export default SearchForm

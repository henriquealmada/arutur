import { ImLocation2 } from 'react-icons/im'
import { Place } from '../../../types'
import PopularPlacesItem from './PopularPlacesItem'

interface Props {
  places: Place[]
}

const PopularPlaces = ({ places }: Props) => {
  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl m-auto">
        <div className="flex gap-3 items-center mb-4 border-b-4 border-[#FFD700] pb-2">
          <div className="rounded-full bg-[#FFD700] p-2 text-white text-xl">
            <ImLocation2 />
          </div>
          <span className="text-xl font-semibold">Lugares Populares</span>
        </div>
        <div className="grid gap-4 items-center sm:grid-cols-2 lg:grid-cols-4">
          {places.map((place, index) => (
            <PopularPlacesItem key={index} place={place} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularPlaces

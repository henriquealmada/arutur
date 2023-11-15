import Image from 'next/image'
import Link from 'next/link'
import { Place } from '../../types'

interface Props {
  place: Place
  type: string
}

const PlaceItem = ({ place, type }: Props) => {
  return (
    <Link href={`${type}/${place._id}`}>
      <div className="w-full h-[400px] sm:h-[270px] lg:h-[300px] xl:h-[340px] relative rounded-md shadow-xl overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-t from-[#000000eb] from-10% via-transparent to-transparent to-95%"></div>
        <Image
          className="group-hover:scale-110 duration-500"
          src={place.image}
          alt={place.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="100%"
        />
        <span className="absolute left-3 right-3 ml-auto mr-auto bottom-4 z-20 text-white font-bold text-xl">
          {place.name}
        </span>
      </div>
    </Link>
  )
}

export default PlaceItem

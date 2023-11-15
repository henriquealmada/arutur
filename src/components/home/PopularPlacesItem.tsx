import React from 'react'
import { Place } from '../../../types'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  place: Place
  index: number
}

const PopularPlacesItem = ({ place, index }: Props) => {
  return (
    <div
      className={`relative rounded-lg shadow-lg overflow-hidden group ${
        index === 0
          ? 'h-60 sm:h-72 sm:col-span-2 md:h-80 lg:row-span-2 lg:h-full'
          : 'h-60 sm:h-64 lg:h-72'
      }`}
    >
      <Link href={`/atracoes/${place._id}`}>
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-t from-[#000000eb] from-10% via-transparent to-transparent to-95%"></div>
        <span className="absolute left-3 right-3 ml-auto mr-auto bottom-4 z-20 text-white font-bold text-xl">
          {place.name}
        </span>
        <Image
          className="group-hover:scale-110 duration-500"
          key={index}
          fill
          src={place.image}
          alt={place.name}
          style={{ objectFit: 'cover' }}
          sizes="100%"
        />
      </Link>
    </div>
  )
}

export default PopularPlacesItem

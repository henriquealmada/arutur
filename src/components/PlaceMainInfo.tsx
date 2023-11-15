import Image from 'next/image'
import { SlLocationPin } from 'react-icons/sl'
import { BiPhoneCall } from 'react-icons/bi'
import { Place } from '../../types'
import Link from 'next/link'

interface Props {
  place: Place
  color: string
}

const PlaceMainInfo = ({ place, color }: Props) => {
  return (
    <section className="pb-16 md:pt-16 md:px-2 mt-12">
      <div className="max-w-7xl m-auto flex flex-col gap-4 md:flex-row md:gap-2 lg:gap-4 items-center">
        <div className="relative w-full h-[320px] sm:h-[450px] md:w-[40%] md:h-[250px] lg:h-[350px] md:rounded-lg overflow-hidden">
          <Image
            src={place?.image || ''}
            fill
            alt={place?.name || ''}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="100%"
          />
        </div>
        <div className="px-6 w-full md:w-[60%] pt-4 sm:pt-0">
          <div className="inline-block rounded-lg rounded-tr-[5rem] bg-white">
            <span
              className="text-2xl md:text-3xl xl:text-4xl font-bold border-b-2 pb-2 block"
              style={{ color, borderBottom: color }}
            >
              {place.name}
            </span>
            <ul className="flex flex-col gap-4 mt-4">
              {place.address && (
                <li className="flex items-center max-w-xl text-sm sm:text-base">
                  <span className="text-xl sm:text-2xl mr-2 text-blue-600">
                    <SlLocationPin />
                  </span>
                  {place.address}
                </li>
              )}
              {place.phone && (
                <li className="flex items-center text-sm sm:text-base">
                  <span className="text-xl sm:text-2xl mr-2 text-blue-600">
                    <BiPhoneCall />
                  </span>
                  {place.phone}
                </li>
              )}
            </ul>
            {place.site && (
              <Link
                className="py-2 px-4 rounded-2xl shadow-[#0000005e] shadow-sm font-semibold hover:opacity-80 duration-200 inline-block mt-4 text-white text-sm sm:text-base"
                style={{ background: color }}
                href={place.site}
                target="_blank"
              >
                Visitar site
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlaceMainInfo

import Image from 'next/image'
import hero from '../../assets/home/hero.jpg'
import HomeSection from '@/components/home/HomeSection'
import PopularPlaces from '@/components/home/PopularPlaces'
import { Place } from '../../../types'
import {
  accomodationsHomeContent,
  attractionsHomeContent,
  eateriesHomeContent
} from '@/utils/homeSectionContent'
import { MdOutlineAttractions } from 'react-icons/md'
import { GiKnifeFork } from 'react-icons/gi'
import { BiSolidBed } from 'react-icons/bi'
export const runtime = 'edge'

// Busca lugares populares
async function getPopularPlaces() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/attractions/popular?pop=Morro dos Conventos,Caverá Country Park,Praça Hercílio Luz,Santuário Nossa Senhora Mãe dos Homens,Center Shopping Araranguá`
  )
  const data: Place[] = await res.json()
  return data
}

export default async function Home() {
  const popularPlaces = await getPopularPlaces()

  return (
    <>
      <section className="h-[100vh] relative flex items-center justify-center">
        <div className="w-full h-full absolute top-0 left-0 z-10 bg-[#00000069]"></div>
        <Image
          src={hero}
          fill
          priority
          alt="Morro dos Conventos"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="absolute z-20 xl:left-60">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl xl:max-w-3xl text-center xl:text-left px-8 xl:px-0">
            Conheça mais sobre Araranguá
          </h1>
        </div>
      </section>
      <PopularPlaces places={popularPlaces} />
      <HomeSection
        type="eatery"
        content={eateriesHomeContent}
        icon={<GiKnifeFork />}
      />
      <HomeSection
        type="accomodation"
        content={accomodationsHomeContent}
        icon={<BiSolidBed />}
      />
      <HomeSection
        type="attraction"
        content={attractionsHomeContent}
        icon={<MdOutlineAttractions />}
      />
    </>
  )
}

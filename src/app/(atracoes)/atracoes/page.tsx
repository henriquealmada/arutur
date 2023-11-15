import PlacesList from '@/components/PlacesList'
import { Attraction } from '../../../../types'
import featured from '../../../assets/attractions/featured.jpg'
import FeaturedImage from '@/components/FeaturedImage'
import Navigation from '@/components/Navigation'
import PageIntro from '@/components/PageIntro'
export const runtime = 'edge'

// Busca as atrações
async function getAttractions() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/attractions`, {
    cache: 'no-store'
  })
  const data: { places: Attraction[]; totalPages: number } = await res.json()
  return data
}

export default async function Page() {
  const { places, totalPages } = await getAttractions()

  const categories = ['entretenimento', 'história', 'natureza']

  return (
    <>
      <FeaturedImage
        heading="ATRAÇÕES"
        image={{ src: featured, alt: 'Praia' }}
      />
      <Navigation currentPage={'Atrações'} />
      <PageIntro
        heading="Lugares para visitar"
        paragraph="Conheça lugares para visitar em Araranguá"
        color={'#009241'}
      />
      <PlacesList
        categories={categories}
        places={places}
        totalPages={totalPages}
        type={'atracoes'}
        color={'#009241'}
      />
    </>
  )
}

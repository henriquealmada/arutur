import featured from '../../../assets/accomodations/featured.jpg'
import PlacesList from '@/components/PlacesList'
import { Accomodation } from '../../../../types'
import FeaturedImage from '@/components/FeaturedImage'
import Navigation from '@/components/Navigation'
import PageIntro from '@/components/PageIntro'
export const runtime = 'edge'

// Busca as hospedagens
async function getAccomodations() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/accomodations`, {
    cache: 'no-store'
  })
  const data: { places: Accomodation[]; totalPages: number } = await res.json()
  return data
}

export default async function Page() {
  const { places, totalPages } = await getAccomodations()

  const categories = ['hotel', 'pousada']

  return (
    <>
      <FeaturedImage
        heading="HOSPEDAGENS"
        image={{ src: featured, alt: 'Hotel' }}
      />
      <Navigation currentPage={'Hospedagens'} />
      <PageIntro
        heading="Encontre o melhor lugar para você se hospedar"
        paragraph="Conheça as opções de hospedagem que Araranguá tem a oferecer"
        color={'#2563EB'}
      />
      <PlacesList
        categories={categories}
        places={places}
        totalPages={totalPages}
        type={'hospedagens'}
        color={'#2563EB'}
      />
    </>
  )
}

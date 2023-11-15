import featured from '../../../assets/eateries/featured.jpg'
import PlacesList from '@/components/PlacesList'
import { Eatery } from '../../../../types'
import FeaturedImage from '@/components/FeaturedImage'
import Navigation from '@/components/Navigation'
import PageIntro from '@/components/PageIntro'
export const runtime = 'edge'

// Busca as opções gastronômicas
async function getEateries() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/eateries`, {
    cache: 'no-store'
  })
  const data: { places: Eatery[]; totalPages: number } = await res.json()
  return data
}

export default async function Page() {
  const { places, totalPages } = await getEateries()

  const categories = [
    'churrascaria',
    'hamburgueria',
    'lanchonete',
    'pizzaria',
    'restaurante'
  ]

  return (
    <>
      <FeaturedImage
        heading="GASTRONOMIA"
        image={{ src: featured, alt: 'Restaurante' }}
      />
      <Navigation currentPage={'Gastronomia'} />
      <PageIntro
        heading="Experimente nossa comida"
        paragraph="Conheça as opções gastronômicas que Araranguá tem a oferecer"
        color={'#FF9100'}
      />
      <PlacesList
        categories={categories}
        places={places}
        totalPages={totalPages}
        type={'gastronomia'}
        color={'#FF9100'}
      />
    </>
  )
}

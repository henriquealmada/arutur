import { Attraction } from '../../../../../types'
import PlaceMainInfo from '@/components/PlaceMainInfo'
import Location from '@/components/Location'
import { Metadata } from 'next'
export const runtime = 'edge'

// Busca uma atração por id
async function getAttraction(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/attractions/${id}`
  )
  const data: Attraction = await res.json()
  return data
}

type Props = {
  params: { id: string }
}

// Gera os metadados da página
export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props
  const attraction = await getAttraction(params.id)
  return {
    title: attraction.name
  }
}

export default async function Page({ params }: Props) {
  const attraction = await getAttraction(params.id)

  return (
    <div className="pt-12">
      <PlaceMainInfo place={attraction} color={'#009241'} />
      <section className="py-16 px-8 bg-[#EDEDED]">
        <div className="max-w-7xl m-auto text-justify">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#009241]">
            Sobre
          </span>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-[#616161] max-w-3xl">
            {attraction.description}
          </p>
        </div>
      </section>
      <Location code={attraction.mapCode} color={'#009241'} />
    </div>
  )
}

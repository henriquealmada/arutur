import { Accomodation } from '../../../../../types'
import PlaceMainInfo from '@/components/PlaceMainInfo'
import Location from '@/components/Location'
import { MdDone } from 'react-icons/md'
import { Metadata } from 'next'
export const runtime = 'edge'

// Busca uma hospedagem por id
async function getAccomodation(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/accomodations/${id}`,
    {
      cache: 'no-store'
    }
  )
  const data: Accomodation = await res.json()
  return data
}

type Props = {
  params: { id: string }
}

// Gera os metadados da página
export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props
  const accomodation = await getAccomodation(params.id)
  return {
    title: accomodation.name
  }
}

export default async function Page({ params }: Props) {
  const accomodation = await getAccomodation(params.id)

  return (
    <div className="pt-12">
      <PlaceMainInfo place={accomodation} color={'#2563EB'} />
      {accomodation.characteristics &&
        accomodation.characteristics?.length > 0 && (
          <section className="py-16 px-8 bg-[#EDEDED]">
            <div className="max-w-7xl m-auto flex flex-col gap-14 text-center  md:text-left">
              {accomodation.characteristics &&
                accomodation.characteristics?.length > 0 && (
                  <div>
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2563EB]">
                      Características
                    </span>
                    <ul className="mt-4 sm:text-lg md:text-xl flex gap-4 flex-wrap justify-center md:justify-start">
                      {accomodation.characteristics?.map((item, index) => (
                        <li key={index} className="flex gap-2 items-center">
                          <MdDone className="text-[#009241]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </section>
        )}
      <Location code={accomodation.mapCode} color={'#2563EB'} />
    </div>
  )
}

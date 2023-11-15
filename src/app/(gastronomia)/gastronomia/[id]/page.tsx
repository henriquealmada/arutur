import { Eatery } from '../../../../../types'
import Location from '@/components/Location'
import { MdDone } from 'react-icons/md'
import PlaceMainInfo from '@/components/PlaceMainInfo'
import { Metadata } from 'next'
export const runtime = 'edge'

// Busca uma opção gastronômica por id
async function getEatery(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/eateries/${id}`,
    {
      cache: 'no-store'
    }
  )
  const data: Eatery = await res.json()
  return data
}

type Props = {
  params: { id: string }
}

// Gera os metadados da página
export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props
  const eatery = await getEatery(params.id)
  return {
    title: eatery.name
  }
}

export default async function Page({ params }: Props) {
  const eatery = await getEatery(params.id)

  return (
    <div className="pt-12">
      <PlaceMainInfo place={eatery} color={'#FF9100'} />
      <section className="py-16 px-8 bg-[#EDEDED]">
        <div className="max-w-7xl m-auto flex flex-col gap-14 text-center md:text-left">
          {eatery.serviceOptions && eatery.serviceOptions.length > 0 && (
            <div>
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FF9100]">
                Opções de Serviço
              </span>
              <ul className="mt-4 sm:text-lg md:text-xl text-gray-800 flex gap-4 flex-wrap justify-center md:justify-start">
                {eatery.serviceOptions?.map((service, index) => (
                  <li key={index} className="flex gap-2 items-center">
                    <MdDone className="text-[#009241]" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {eatery.accessibility && eatery.accessibility.length > 0 && (
            <div>
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FF9100]">
                Acessibilidade
              </span>
              <ul className="mt-4 sm:text-lg md:text-xl text-gray-800 flex gap-4 flex-wrap justify-center md:justify-start">
                {eatery.accessibility?.map((item, index) => (
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
      <Location code={eatery.mapCode} color={'#FF9100'} />
    </div>
  )
}

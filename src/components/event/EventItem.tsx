import Image from 'next/image'
import { Event } from '../../../types'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import Link from 'next/link'

interface Props {
  event: Event
}

const EventItem = ({ event }: Props) => {
  const startDate = new Date(event.startDate)
  const endDate = new Date(event.endDate)
  const startDay = startDate.getDate()
  const endDay = endDate.getDate()

  // Retorna o mês de uma data
  const getMonth = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      month: 'long'
    })
      .format(date)
      .slice(0, 3)
  }

  // Formata o dia
  const formatDay = (day: number) => (day < 10 ? `0${day}` : day)

  return (
    <div className="w-full h-[470px] xl:h-[470px] rounded-md border-2 hover:border-gray-300 duration-500">
      <div className="relative h-1/2 border-b-2">
        <div className="absolute left-2 -top-3 z-10 text-[white] bg-[#C04ABC] py-2 px-6 flex flex-col items-center gap-1 shadow-lg shadow-[#00000067]">
          <span className="text-3xl font-bold">{formatDay(startDay)}</span>
          <span className="uppercase font-semibold text-sm">
            {getMonth(startDate)}
          </span>
        </div>
        <Image
          src={event.image}
          fill
          alt={event.name}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100%"
        />
      </div>
      <div className="p-4 flex flex-col h-1/2 justify-between items-start">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold">{event.name}</span>
          <span className="text-sm text-[#4e4e4e] font-semibold">{`${formatDay(
            startDay
          )} ${getMonth(startDate)} - ${formatDay(endDay)} ${getMonth(
            endDate
          )}`}</span>
          <div className="flex gap-2 items-center">
            <span className="text-xl text-[#1C3AA1]">
              <HiOutlineLocationMarker />
            </span>
            <span className="text-sm">{event.location}</span>
          </div>
        </div>
        <Link
          className={`py-2 px-4 border-2 text-[#C04ABC] font-bold border-[#C04ABC] hover:bg-[#C04ABC] hover:text-white duration-300`}
          href={event.site}
          target="_blank"
        >
          Mais informações
        </Link>
      </div>
    </div>
  )
}

export default EventItem

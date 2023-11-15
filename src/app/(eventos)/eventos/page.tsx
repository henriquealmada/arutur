import featured from '../../../assets/events/featured.jpg'
import { Event } from '../../../../types'
import FeaturedImage from '@/components/FeaturedImage'
import Navigation from '@/components/Navigation'
import EventsList from '@/components/event/EventsList'
import PageIntro from '@/components/PageIntro'
export const runtime = 'edge'

// Busca os eventos
async function getEvents() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/events`, {
    cache: 'no-store'
  })
  const data: Event[] = await res.json()
  return data
}

export default async function Page() {
  const events = await getEvents()

  return (
    <>
      <FeaturedImage
        heading="EVENTOS"
        image={{ src: featured, alt: 'Evento' }}
      />
      <Navigation currentPage={'Eventos'} />
      <PageIntro
        heading="Explore os eventos da cidade"
        paragraph="Descubra os eventos que ocorrerão em Araranguá"
        color={'#C04ABC'}
      />
      <EventsList events={events} />
    </>
  )
}

import EventItem from '@/components/event/EventItem'
import { Event } from '../../../types'

interface Props {
  events: Event[]
}

const EventsList = ({ events }: Props) => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl m-auto">
        <div className="grid gap-x-4 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {events.map(event => (
            <EventItem key={event._id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventsList

import connectToDatabase from '@/utils/db-connection'
import { NextResponse } from 'next/server'
import Event from '../../../../../models/event'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

export async function GET(request: Request, { params }: Params) {
  const id = params.id
  await connectToDatabase()
  const event = await Event.findById(id)

  if (!event) {
    return NextResponse.json({ message: 'Event not found' }, { status: 404 })
  }

  return NextResponse.json(event, { status: 200 })
}

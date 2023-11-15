import connectToDatabase from '@/utils/db-connection'
import { NextResponse } from 'next/server'
import Event from '../../../../models/event'

export async function GET() {
  await connectToDatabase()
  const events = await Event.find()
  return NextResponse.json(events, { status: 200 })
}

import connectToDatabase from '@/utils/db-connection'
import { NextRequest, NextResponse } from 'next/server'
import Attraction from '../../../../../models/attraction'

export async function GET(request: NextRequest) {
  const pop = request.nextUrl.searchParams.get('pop')

  await connectToDatabase()

  if (!pop) {
    return NextResponse.json(
      { message: 'Param "pop" is empty' },
      { status: 400 }
    )
  }

  const names = pop.split(',')
  const query = { name: { $in: names } }
  const attractions = await Attraction.find(query)

  return NextResponse.json(attractions, { status: 200 })
}

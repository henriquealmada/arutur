import connectToDatabase from '@/utils/db-connection'
import { NextResponse } from 'next/server'
import Attraction from '../../../../../models/attraction'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

export async function GET(request: Request, { params }: Params) {
  const id = params.id
  await connectToDatabase()
  const attraction = await Attraction.findById(id)

  if (!attraction) {
    return NextResponse.json(
      { message: 'Attraction not found' },
      { status: 404 }
    )
  }

  return NextResponse.json(attraction, { status: 200 })
}

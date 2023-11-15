import connectToDatabase from '@/utils/db-connection'
import { NextRequest, NextResponse } from 'next/server'
import Attraction from '../../../../../models/attraction'

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get('q')
  const page = parseInt(request.nextUrl.searchParams.get('page') || '1')
  const limit = parseInt(request.nextUrl.searchParams.get('limit') || '12')

  await connectToDatabase()

  const count = await Attraction.countDocuments()

  if (!q) {
    return NextResponse.json({ message: 'Param "q" is empty' }, { status: 400 })
  }

  const places = await Attraction.find({
    name: { $regex: q, $options: 'i' }
  })
    .skip((page - 1) * limit)
    .limit(limit * 1)

  return NextResponse.json(
    { places, totalPages: Math.ceil(count / limit) },
    { status: 200 }
  )
}

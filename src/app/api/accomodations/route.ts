import connectToDatabase from '@/utils/db-connection'
import { NextRequest, NextResponse } from 'next/server'
import Accomodation from '../../../../models/accomodation'

export async function GET(request: NextRequest) {
  const page = parseInt(request.nextUrl.searchParams.get('page') || '1')
  const limit = parseInt(request.nextUrl.searchParams.get('limit') || '12')

  await connectToDatabase()

  const count = await Accomodation.countDocuments()

  const places = await Accomodation.find()
    .skip((page - 1) * limit)
    .limit(limit * 1)

  return NextResponse.json(
    { places, totalPages: Math.ceil(count / limit) },
    { status: 200 }
  )
}

import connectToDatabase from '@/utils/db-connection'
import { NextRequest, NextResponse } from 'next/server'
import Eatery from '../../../../../models/eatery'

export async function GET(request: NextRequest) {
  const cat = request.nextUrl.searchParams.get('cat')
  const page = parseInt(request.nextUrl.searchParams.get('page') || '1')
  const limit = parseInt(request.nextUrl.searchParams.get('limit') || '12')

  await connectToDatabase()

  const count = await Eatery.countDocuments()

  if (!cat) {
    return NextResponse.json(
      { message: 'Param "cat" is empty' },
      { status: 400 }
    )
  }

  const places = await Eatery.find({
    category: { $regex: cat, $options: 'i' }
  })
    .skip((page - 1) * limit)
    .limit(limit * 1)

  return NextResponse.json(
    { places, totalPages: Math.ceil(count / limit) },
    { status: 200 }
  )
}

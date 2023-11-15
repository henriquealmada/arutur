import connectToDatabase from '@/utils/db-connection'
import { NextResponse } from 'next/server'
import Eatery from '../../../../../models/eatery'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

export async function GET(request: Request, { params }: Params) {
  const id = params.id
  await connectToDatabase()
  const eatery = await Eatery.findById(id)

  if (!eatery) {
    return NextResponse.json({ message: 'Eatery not found' }, { status: 404 })
  }

  return NextResponse.json(eatery, { status: 200 })
}

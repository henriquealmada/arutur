import connectToDatabase from '@/utils/db-connection'
import { NextResponse } from 'next/server'
import Accomodation from '../../../../../models/accomodation'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

export async function GET(request: Request, { params }: Params) {
  const id = params.id
  await connectToDatabase()
  const accomodation = await Accomodation.findById(id)

  if (!accomodation) {
    return NextResponse.json(
      { message: 'Accomodation not found' },
      { status: 404 }
    )
  }

  return NextResponse.json(accomodation, { status: 200 })
}

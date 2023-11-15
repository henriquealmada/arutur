import mongoose, { Schema } from 'mongoose'

const AccomodationSchema = new Schema({
  category: String,
  name: String,
  image: String,
  phone: String,
  address: String,
  site: String,
  characteristics: [String],
  mapCode: String
})

const Accomodation =
  mongoose.models.Accomodation ||
  mongoose.model('Accomodation', AccomodationSchema)

export default Accomodation

import mongoose, { Schema } from 'mongoose'

const EaterySchema = new Schema({
  category: String,
  name: String,
  image: String,
  phone: String,
  address: String,
  site: String,
  serviceOptions: [String],
  accessibility: [String],
  mapCode: String
})

const Eatery = mongoose.models.Eatery || mongoose.model('Eatery', EaterySchema)

export default Eatery

import mongoose, { Schema } from 'mongoose'

const AttractionSchema = new Schema({
  category: String,
  name: String,
  image: String,
  phone: String,
  address: String,
  site: String,
  description: String,
  mapCode: String
})

const Attraction =
  mongoose.models.Attraction || mongoose.model('Attraction', AttractionSchema)

export default Attraction

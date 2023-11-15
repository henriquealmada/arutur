import mongoose, { Schema } from 'mongoose'

const EventSchema = new Schema({
  name: String,
  image: String,
  startDate: Date,
  endDate: Date,
  location: String,
  site: String
})

const Event = mongoose.models.Event || mongoose.model('Event', EventSchema)

export default Event

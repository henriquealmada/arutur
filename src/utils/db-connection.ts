import mongoose from 'mongoose'

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string)
    console.log('Connected to database')
  } catch (e) {
    console.log('Error connecting to database')
  }
}

export default connectToDatabase

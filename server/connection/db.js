import mongoose from 'mongoose';
import database from './myDatabase.js';



const connection = async () => {
  try {
    const URL = `mongodb+srv://${database.username}:${database.password}@clone-inshorts.sutlr.mongodb.net/INSHORTS-CLONE?retryWrites=true&w=majority`
    await mongoose.connect(URL, { useNewUrlParser: true })
    console.log("Database is connected successfully")
  } catch (error) {
    console.log("error occured during connection is:", error)
  }

}


export default connection;
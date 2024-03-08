// utils/db.js
import mongoose from 'mongoose';
require('dotenv').config();


let isConnected;

async function connectDB() {
  if (isConnected) {
    console.log('Using existing database connection');
    return;
  }

  console.log({mongooseURI: process.env.MONGODB_URI})
  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URI);

    isConnected = dbConnection.connections[0].readyState;
    console.log('Database connected successfully', {isConnected});
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw new Error('Error connecting to database');
  }
}

export default connectDB;

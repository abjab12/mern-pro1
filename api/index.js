import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const uri = 'mongodb+srv://abrsh1:admin@cluster0.iissraf.mongodb.net/mern1?retryWrites=true&w=majority';

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
    // Your code here
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

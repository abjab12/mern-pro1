import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserController from './routes/user.route.js';  
dotenv.config();

const uri = 'mongodb+srv://abrsh1:admin@cluster0.iissraf.mongodb.net/mern1?retryWrites=true&w=majority';

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use("/api/user", UserController);  //  the route path

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import addRoute from './routes/add.route.js';
import addKolamRoute from './routes/addKolam.route.js';
import authRoute from './routes/auth.route.js';
import userRoute from './routes/user.route.js';


const app = express();
dotenv.config();


mongoose.set('strictQuery', true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('DB Connected successfully!');
  } catch (error) {
    console.log(error);
  }
};
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoute); 
app.use('/api/users', userRoute);
app.use('/api/adds', addRoute);
app.use('/api/addskolam', addKolamRoute);


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong!';
  
    return res.status(errorStatus).send(errorMessage);
  });
  
  app.listen(8800, () => {
    connect();
    console.log('Backend server is running!');
  });
  
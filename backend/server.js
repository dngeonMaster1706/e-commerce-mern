import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import {notFound} from '../backend/middleware/errorMiddleware.js';
import { errorHanlder } from '../backend/middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js'

connectDB();
const port=process.env.PORT || 5000;



const app=express();


app.get('/',(req,res)=>{
    res.send('API is runnning')
});

app.use('/api/products',productRoutes)


app.use(notFound)
app.use(errorHanlder)

app.listen(port ,()=>
    console.log(`Server running on port ${port}`))
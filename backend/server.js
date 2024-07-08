import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import {notFound} from '../backend/middleware/errorMiddleware.js';
import { errorHanlder } from '../backend/middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
connectDB();
const port=process.env.PORT || 5000;



const app=express();
 
//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))


//Cookie Parser Middleware

app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('API is runnning')
});

app.use('/api/products' ,productRoutes)
app.use('/api/users',userRoutes)


app.use(notFound)
app.use(errorHanlder)

app.listen(port ,()=>
    console.log(`Server running on port ${port}`))
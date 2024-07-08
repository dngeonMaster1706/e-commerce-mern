import jwt from 'jsonwebtoken';
import asyncHanlder from './asyncHandler.js';
import User from '../models/userModel.js';



//Protected Routes

 const protect=asyncHanlder(async(req,res,next)=>{
    let token ;

    //Reading the jwt from the cookie

    token=req.cookies.jwt;
    if(token){
        try {
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            req.user=await User.findById(decoded.userId).select('-password');
            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error('No Authorization , Token failed')
        }
    }else{
        res.status(401);
        throw new Error('No Authorization , Token Not found')
    }
})

//ADMIN Middleware

const admin=(req,res,next)=>{
    if(req.user && req.user.isAdmin){
        next();
    }
    else{
        res.status(401);
        throw new Error('Not Authorized as admin')
    }
}

export {protect,admin};
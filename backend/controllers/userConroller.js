import asyncHanlder from "../middleware/asyncHandler.js";
import User from "../models/userModel.js"
import jwt from 'jsonwebtoken'
//Auth User and get the token
//POST /api/users/login

const authUser=asyncHanlder(async(req,res)=>{
    const {email,password}=req.body

    const user= await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        //Creating token
        const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{
            expiresIn:'30d'
        });
        
        //Set JWT as http only cookie
        res.cookie('jwt',token,{
            httpOnly:true,
            secure:process.env.NODE_ENV !=='development',
            sameSite:'strict',
            maxAge:30*24*60*60*100 //30days
        })
        res.json({
             _id:user._id,
             name:user.name,
             email:user.email,
             isAdmin:user.isAdmin
        });
    }else{
        res.status(401);
        throw new Error('Invalid Email or Password')
    }

})


//Resister User
//POST /api/users

const registerUser=asyncHanlder(async(req,res)=>{
    res.send('registerUser')
})

//Logout User  || clear the cookie
//POST /api/users/logout

const logoutUser=asyncHanlder(async(req,res)=>{
    res.send('Log out User')
})

//get user profile
//GET /api/users/profile

const getUserProfile=asyncHanlder(async(req,res)=>{
    res.send('get User Profile')
})

//upadte user Profile
//PUT /api/users/profile

const updateUserProfile=asyncHanlder(async(req,res)=>{
    res.send('update User Profile')
})

//upadte users
//GET /api/users/users
//admin

const getUsers=asyncHanlder(async(req,res)=>{
    res.send('get users')
})

//upadte user by ID
//GET /api/users/users/:id
//admin

const getUserbyId=asyncHanlder(async(req,res)=>{
    res.send('get users by id ')
})

//DELETE users
//DELETE /api/users/users/:id
//admin

const deleteUser=asyncHanlder(async(req,res)=>{
    res.send('delete users')
})

//Update user
//PUT /api/users/users/:id
//admin

const updateUser=asyncHanlder(async(req,res)=>{
    res.send('uupdate users')
})

export{
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserbyId,
    updateUser
}
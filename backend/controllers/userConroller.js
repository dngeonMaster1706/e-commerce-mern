import asyncHanlder from "../middleware/asyncHandler.js";
import User from "../models/userModel.js"
import generateToken from "../utils/generateToken.js";
 
//Auth User and get the token
//POST /api/users/login

const authUser=asyncHanlder(async(req,res)=>{
    const {email,password}=req.body

    const user= await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        //Creating token
        generateToken(res,user._id)
        res.status(200).json({
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
    const {name,email,password}=req.body;

    const userExists=await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error('user already exist')
    }

    const user= await User.create({
        name,
        email,
        password
    });
    if(user){
        generateToken(res,user._id)
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        })
    }else{
        res.status(400);
        throw new Error('Inavlid User Data')
    }
});

//Logout User  || clear the cookie
//POST /api/users/logout

const logoutUser=asyncHanlder(async(req,res)=>{
    res.cookie('jwt','',{
        httpOnly:true,
        expires:new Date(0)
    });
    res.status(200).json(
        {
            messgae:'logged out successfully'
        }
    )
})

//get user profile
//GET /api/users/profile

const getUserProfile=asyncHanlder(async(req,res)=>{
    const user=await User.findById(req.user._id);
    
    if(user){
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        })
    }
    else{
        res.status(404);
        throw new Error('User Not Found')
    }
                


})

//upadte user Profile
//PUT /api/users/profile

const updateUserProfile=asyncHanlder(async(req,res)=>{
    const user=await User.findById(req.user._id);
    
    if(user){
        user.name=req.body.name || user.name;
        user.email=req.body.email || user.email;

        if(req.body.password){
            user.password=req.body.password
        }

        const updatedUser=await user.save();

        res.status(200).json({
            _id:updatedUser._id,
            name:updatedUser.name,
            email:updatedUser.email,
            isAdmin:updatedUser.isAdmin,
        })
    }
    else{
        res.status(404);
        throw new Error('User Not Found')
    }
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
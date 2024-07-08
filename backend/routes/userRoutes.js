import express from "express"
const router=express.Router();
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserbyId,
    updateUser
} from '../controllers/userConroller.js'
import {protect,admin} from '../middleware/authMiddleware.js'




//endpoint - '/api/user'
router.route('/').post(registerUser).get(protect,admin,getUsers) 
router.post('/logout',logoutUser) //log out
router.post('/auth',authUser) //login
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile) //get and uuupdate user profile

//to get delete update user by id
router.route('/:id').delete(protect,admin,deleteUser).get(protect,admin,getUserbyId).put(protect,admin,updateUser);

 
export default router  
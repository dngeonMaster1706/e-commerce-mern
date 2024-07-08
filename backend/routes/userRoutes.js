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

//endpoint - '/api/user'
router.route('/').post(registerUser).get(getUsers) 
router.post('/logout',logoutUser) //log out
router.post('/login',authUser) //login
router.route('/profile').get(getUserProfile).put(updateUserProfile) //get and uuupdate user profile

//to get delete update user by id
router.route('/:id').delete(deleteUser).get(getUserbyId).put(updateUser);

 
export default router  
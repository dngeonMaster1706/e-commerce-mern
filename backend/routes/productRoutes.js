import express from "express"
const router=express.Router();
import asyncHanlder from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js"

router.get('/',asyncHanlder(async(req,res)=>{

    const products=await Product.find({})
    throw new Error('some error')
    res.json(products)
}))

//Route to fetch a single product

router.get('/:id', asyncHanlder(async(req,res)=>{
    const product=await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }
   else{
    res.staus(404);
    throw new Error('resource not found')
   }
}))


export default router 
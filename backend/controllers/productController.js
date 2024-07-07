import asyncHanlder from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js"

//Fetches all the products
//GET /api/products

const getProducts=asyncHanlder(async(req,res)=>{
    const products=await Product.find({})    
    res.json(products)
})


//Fetches a product
//GET /api/products/:id
 
const getProductById=asyncHanlder(async(req,res)=>{
    const product=await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }
   else{
    res.staus(404);
    throw new Error('resource not found')
   }
})

export {getProductById,getProducts}
import asyncHanlder from "../middleware/asyncHandler.js";
import Order from '../models/orderModel.js'

//To create a new order
//POST /api/orders

const addOrderItems=asyncHanlder(async(req,res)=>{
    const {
        orderItems,
        shippingAddres,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    }=req.body;

    if(orderItems && orderItems.length===0){
        res.status(400);
        throw new Error('No order items')
    }
    else{
        const order=new Order({
        orderItems:orderItems.map((x)=>({
            ...x,
            product:x._id,
            _id:undefined
        })),
        shippingAddres,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
        })
        const createdOrder=await order.save();

        res.status(201).json(createdOrder)
    }
}) 
//get logged in users orders
//GET /api/orders/myorders

const getMyOrders=asyncHanlder(async(req,res)=>{
    const orders = await Order.find({user:req.user._id});
    res.status(200).json(orders)
})

//get order by id
//GET /api/order/:id

const getOrderById=asyncHanlder(async(req,res)=>{
    const order = await Order.findById(req.params.id).populate('user','name email')

    if(order){
        res.status(200).json(order);
    }
    else{
        res.status(404);
        throw new Error('order not found')
    }
})


//Update order to paid
//GEt /api/orders/:id?pay

const updateOrderToPaid=asyncHanlder(async(req,res)=>{
    res.send('update order to paid')
})


//Update order to delivered
//GET /api/orders/:id?deliver

const updateOrderToDelivered=asyncHanlder(async(req,res)=>{
    res.send('update order to delivered')
})

//Get all orders
//GET /api/orders

const getOrders=asyncHanlder(async(req,res)=>{
    res.send('get all orders')
})

export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders
};
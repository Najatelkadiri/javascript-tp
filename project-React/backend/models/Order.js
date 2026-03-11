import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({
    orderDate:{type:Date,default:Date.now},
    status:{type:String,required:true},
    total:{type:double,required:true},
    
    
   
    
}

);
const Order=mongoose.model("Order",orderSchema);
export default Order;
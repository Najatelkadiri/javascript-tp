import mongoose from "mongoose";

const clientSchema=new mongoose.Schema({
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    email:{type:String,required:true},
    adress:{type:String,required:true},
    tel:{type:String,required:true},
    password:{type:String,required:true},
    
}

);
const Client=mongoose.model("Client",clientSchema);
export default Client;
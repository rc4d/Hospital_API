const mongoose=require("mongoose");


const schema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
     ,
     department:{
         type:String,
         required:true
     }
    

     

},{
    timestamps:true
})






const model=mongoose.model("doctors",schema);

module.exports=model;
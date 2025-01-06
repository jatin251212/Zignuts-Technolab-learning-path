import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
      },
      email:{
        type:String,
        required:true,
        // unique:true
      },
      password: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        enum: ['admin', 'user'], // Two choices: admin or user
        default: 'user', // Default role is "user"
        required: true,
      },
    }, { timestamps: true })

export const User=mongoose.model('User',userSchema); 
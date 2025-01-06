import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const register= async(req,res)=>{
    try {
        const {username,password,email}=req.body;
        if(!username ||!email || !password){
            req.flash('toast', { message: 'All fields are required', success: false });
            return res.redirect('/');
        };
        const user=await User.findOne({username});
        if(user){
            req.flash('toast', { message: 'User already exists', success: false });
            return res.redirect('/');
        }

        const hashedPassword= await bcrypt.hash(password,10);
        await User.create({
            username:username,
            email:email,
            password:hashedPassword,
            role:'user',
        })
        // Simulate user creation
        req.flash('toast', { message: 'Account created successfully, Please log in', success: true });
        return res.redirect('/login');


    } catch (error) {
        console.log(error);
        req.flash('toast', { message: 'An error occurred!', success: false });
        return res.redirect('/');
    }
}


export const login= async (req,res)=>{
    try {
        const {email,password,role}=req.body;
        if(!email || !password || !role){
            req.flash('toast', { message: 'All fields are required', success: false });
            return res.redirect('/login');
        };

        let user=await User.findOne({email: email,role: role});
        // message:"Incorrect Email Address or role",

        if(!user){
            req.flash('toast', { message: 'Incorrect Email Address or role', success: false });
            return res.redirect('/login');
        }

        const isPasswordMatch= await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            
                req.flash('toast', { message: 'Incorrect Password', success: false });
                return res.redirect('/login');
            
        }

        const tokenData={
            userId:user._id
        }
        const token= jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        // Set the cookie with the token
        res.cookie('token', token, {
            maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day in milliseconds
            httpOnly: true, // makes the cookie inaccessible to JavaScript (increases security)
            sameSite: 'strict', // prevents CSRF attacks
        });

    
        // Redirect based on role
        if (user.role === 'admin') {
            return res.redirect('/admin-dashboard');
        } else {
            return res.redirect('/home');
        }


        
    } catch (error) {
        console.log(error);
        req.flash('toast', { message: 'An error occurred!', success: false });
        return res.redirect('/');
    }
}

export const logout= async (req,res)=>{
    try {
        
        req.flash('toast', { message: 'Logged out Successfully!', success: true });
        return res.redirect('/login');
    } catch (error) {
        console.log(error);
        req.flash('toast', { message: 'An error occured!', success: false });
        return res.redirect('/admin-dashboard');
    }
}
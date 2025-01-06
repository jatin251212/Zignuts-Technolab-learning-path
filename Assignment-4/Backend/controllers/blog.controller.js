import { Blog } from '../models/blog.model.js';
import { Category } from '../models/category.model.js';
import { User } from '../models/user.model.js';
import { generateSlug } from "../utils/slugGenerator.js"; // Import the utility function
import sharp from 'sharp';
import path from 'path';
import mongoose from 'mongoose';
import fs from 'fs';


export const addBlog=async (req,res)=>{
    try {
        const {title,description,category}=req.body;
        // console.log(title,description,category);
        const fileData = req.file;
        if(!title || !description || !category || !fileData){
            
            req.flash('toast', { message: 'Please provide neccesary information to publish Blog', success: false });
            return res.redirect('/admin-dashboard');
        }

        // let user=await User.findOne({_id:req.id});
            // if(user.role != 'admin'){
            //     return res.status(400).json({
            //             message:"You cannot add category here,only admin can add category",
            //             success:false
            //     })
            // }

        const existingBlog=await Blog.findOne({title:title});
        let existCategory=await Category.findOne({name:category});
        if(!existCategory){
        
            req.flash('toast', { message: 'Provided Category is not exist,please check it', success: false });
            return res.redirect('/admin-dashboard');
        }


        if(existingBlog){
            
            req.flash('toast', { message: 'Blog with this title already exist,please provide different title', success: false });
            return res.redirect('/admin-dashboard');
        }

        // Generate slug from title
        const slug = generateSlug(title);

        // Automatically set the publish date to the current date and time
        const publishDate = new Date();

        let featuredImagePath = fileData.path; // Example: "public/uploads/images/image.png"

        // Remove "public/" from the path
        featuredImagePath = featuredImagePath.replace("public", '');
        // console.log(featuredImagePath);


        // Generate a thumbnail image
        let thumbnailPath = path.join('public/uploads/thumbnail-image', `thumbnail-${fileData.filename}`);
        await sharp(fileData.path)
            .resize(200, 200) // Resize the image to 200x200 or any desired dimensions
            .toFile(thumbnailPath);

        thumbnailPath = thumbnailPath.replace("public", '');
        // console.log(thumbnailPath);

        const createBlog=await Blog.create({
            title,
            slug,
            description,
            category,
            categoryId:existCategory._id,
            publishDate,
            featuredImage:featuredImagePath, // Save file path in the blog
            thumbnailImage:thumbnailPath,

        })
        existCategory.blogArray.push(createBlog._id);
        await existCategory.save();

        // return res.status(201).json({
        //     message:"Blog created successfully",
        //     createBlog,
        //     success:true
        // });
        req.flash('toast', { message: 'Blog created successfully', success: true });
        return res.redirect('/admin-dashboard');
        
    } catch (error) {
        console.log(error);
  
        req.flash('toast', { message: 'An error occurred while adding the blog', success: false });
        return res.redirect('/admin-dashboard');
    }
}

export const deleteBlog=async (req,res)=>{
    try {
        const blogId=req.query.blogId;
        let blog=await Blog.findById(blogId);
        if(!blog){
             
            req.flash('toast', { message: 'Blog not found', success: false });
            return res.redirect('/admin-dashboard');
        }

        let thumbnailImageUrl=blog.thumbnailImage;
        thumbnailImageUrl = `public${thumbnailImageUrl}`;

        let featuredImageUrl=blog.featuredImage;
        featuredImageUrl= `public${featuredImageUrl}`;

        // Delete thumbnailImage and featuredImage
        if (blog.thumbnailImage) {
            try {
                fs.unlinkSync(thumbnailImageUrl); // Remove the thumbnail image
            } catch (err) {
                console.log(`Error deleting thumbnail image: ${err.message}`);
            }
        }

        if (blog.featuredImage) {
            try {
                fs.unlinkSync(featuredImageUrl); // Remove the featured image
            } catch (err) {
                console.log(`Error deleting featured image: ${err.message}`);
            }
        }

        let category=await Category.findById(blog.categoryId);

        blog=await Blog.findByIdAndDelete(blogId);
        category.blogArray.pull(blogId);
        await category.save();

        
        req.flash('toast', { message: 'Blog deleted successfully', success: true});
        return res.redirect('/admin-dashboard');
        
    } catch (error) {
        console.log(error);
        
          req.flash('toast', { message: 'An error occurred while deleting the blog', success: false});
          return res.redirect('/admin-dashboard');
    }

}

export const updateBlog=async (req,res)=>{
    try {
        // const blogId=req.params.id;
        let {newTitle,newDescription,blogId}=req.body;
        console.log(newTitle, newDescription);
        console.log(blogId);

        // Convert blogId to ObjectId
        // blogId = mongoose.Types.ObjectId(blogId);



        let blog=await Blog.findById(blogId);
        const check=await Blog.findOne({title:newTitle});
        if(check){
            
            req.flash('toast', { message: 'Blog with this title already exist', success: false });
            return res.redirect('/admin-dashboard');
        }

        if(!blog){
            
            req.flash('toast', { message: 'Blog not found', success: false });
            return res.redirect('/admin-dashboard');
        }

        // Generate slug from title
        const slug = generateSlug(newTitle);

        blog=await Blog.findByIdAndUpdate(blogId,{title:newTitle,description:newDescription,slug:slug},{new:true});

        
        req.flash('toast', { message: 'Blog Updated successfully', success: true });
        return res.redirect('/admin-dashboard');


        
    } catch (error) {
        console.log(error);
        
        req.flash('toast', { message: 'An error occurred while updating the blog', success: false });
        return res.redirect('/admin-dashboard');
    }
}
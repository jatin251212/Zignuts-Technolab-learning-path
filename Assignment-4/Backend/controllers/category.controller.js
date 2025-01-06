import { Blog } from '../models/blog.model.js';
import {Category} from '../models/category.model.js'
import { User } from '../models/user.model.js';

export const addCategory= async (req,res)=>{
    try {
        const {category}=req.body;
        if(!category){
            
            req.flash('toast', { message: 'Please provide category', success: false });
            return res.redirect('/admin-dashboard');
        }

        let user=await User.findOne({_id:req.id});
        if(user.role != 'admin'){
            
            req.flash('toast', { message: 'You cannot add category here,only admin can add category', success: false });
            return res.redirect('/admin-dashboard');
        }

        const categoryExist=await Category.findOne({name:category});
        if(categoryExist){
            
            req.flash('toast', { message: 'Category with this name already exist', success: false });
            return res.redirect('/admin-dashboard');
        }

        let createCategory=await Category.create({
            name:category
        })

        
        req.flash('toast', { message: `Category ${category} created successfully`, success: true });
        return res.redirect('/admin-dashboard');

        
        
    } catch (error) {
        console.log(error);
        req.flash('toast', { message: 'An error occured', success: false });
        return res.redirect('/admin-dashboard');
    }
}

export const deleteCategory= async (req,res)=>{
    try {
        const category =  req.query.category;
        // console.log(category);
        let deleteCategory=await Category.findOne({name:category});
        if(!deleteCategory){
            
            req.flash('toast', { message: 'Category with this name do not exist', success: false });
            return res.redirect('/admin-dashboard');
        }

        const blog=await Blog.find({category:category});
        // console.log(blog);
        if(blog.length > 0){
            
            req.flash('toast', { message: 'There is blog associated with this category,first delete that to delete category', success: false });
            return res.redirect('/admin-dashboard');
        }
        deleteCategory=await Category.findOneAndDelete({name:category});

        req.flash('toast', { message: 'Category deleted succesfully', success: true});
        return res.redirect('/admin-dashboard');
        
    } catch (error) {
        console.log(error);
        req.flash('toast', { message: 'An error occured', success: false });
        return res.redirect('/admin-dashboard');
        
    }
}

export const updateCategory=async (req,res)=>{
    try {
        const {category, newCategory}=req.body;
        // console.log(category, newCategory);
        let categoryExist=await Category.findOne({name:category});
        if(!categoryExist){

            req.flash('toast', { message: 'Category with this name do not exist', success: false });
            return res.redirect('/admin-dashboard');
            
        }
        const categoryId=categoryExist._id;
        const check=await Category.findOne({name:newCategory});
        if(check){
            
            req.flash('toast', { message: 'Category with this name already exist,try any different New Category', success: false });
            return res.redirect('/admin-dashboard');
        }
        categoryExist=await Category.findOneAndUpdate({name:category},{name:newCategory},{new:true});
        const updateBlogs=await Blog.updateMany({categoryId:categoryId},{category:newCategory},{new:true});
        // const updateBlog=await Blog.updateMany({category:category},{category:newCategory}, {new:true});

        req.flash('toast', { message: `Category updated successfully from ${category} to ${newCategory}`, success: true });
            return res.redirect('/admin-dashboard');

        
        
    } catch (error) {
        console.log(error);
        req.flash('toast', { message: 'An error occured', success: false });
        return res.redirect('/admin-dashboard');
    }
}
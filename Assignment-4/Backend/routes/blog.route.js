import express from 'express';
import authentication from '../middleware/authentication.js';
import { addBlog, deleteBlog, updateBlog } from '../controllers/blog.controller.js';
// import upload from '../middleware/multer.js';
import uploads from '../middleware/multer.js';


const router=express.Router();

router.route('/addBlog').post(authentication, uploads.single('image'), addBlog);
router.route('/deleteBlog').get(authentication,deleteBlog);
router.route('/updateBlog').post(authentication,updateBlog);


export default router;

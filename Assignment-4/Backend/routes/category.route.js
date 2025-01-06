import express from 'express';
import authentication from '../middleware/authentication.js';
import { addCategory, deleteCategory, updateCategory } from '../controllers/category.controller.js';

const router=express.Router();

router.route('/addCategory').post(authentication,addCategory);

router.route('/deleteCategory').get(authentication,deleteCategory);
router.route('/updateCategory').post(authentication,updateCategory);


export default router;
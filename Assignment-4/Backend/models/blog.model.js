import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  categoryId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  publishDate: {
    type: Date,
    required: true,
  },
  thumbnailImage: {
    type: String, 
    // required: true,
  },
  featuredImage: {
    type: String, 
    // required: true,
  },
}, { timestamps: true });

export const Blog=mongoose.model('Blog', blogSchema);

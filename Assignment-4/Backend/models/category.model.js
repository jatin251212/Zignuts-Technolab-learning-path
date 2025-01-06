import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true, // Remove extra spaces
  },
  blogArray:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Blog'
    }],
  // slug: {
  //   type: String,
  //   // required: true,
  //   unique: true,
  // },
}, { timestamps: true });

// Middleware to auto-generate slug before saving
// categorySchema.pre('save', async function (next) {
//   if (!this.isModified('name')) return next();
//   this.slug = this.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'); // Convert name to slug
//   next();
// });

// Middleware to prevent deleting a category if it’s linked to a blog
// categorySchema.pre('deleteOne', { document: true, query: false }, async function (next) {
//   const Blog = model('Blog'); // Reference the Blog model
//   const linkedBlogs = await Blog.find({ category: this._id });
//   if (linkedBlogs.length > 0) {
//     throw new Error('Cannot delete a category that is linked to existing blogs.');
//   }
//   next();
// });

export const Category=mongoose.model('Category', categorySchema);

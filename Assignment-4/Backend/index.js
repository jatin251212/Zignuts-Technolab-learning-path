import express from 'express';
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from 'path';
import connectDB from "./utils/db.js";
import userRoutes from "./routes/user.route.js";
import categoryRoutes from "./routes/category.route.js";
import blogRoutes from "./routes/blog.route.js";
import { fileURLToPath } from 'url';
import session from 'express-session';
import flash from 'connect-flash';
import { Category } from './models/category.model.js';
import { Blog } from './models/blog.model.js';



dotenv.config({});

const app=express();

app.use(session({
    secret: 'HelloWrold',  // Change this to a secure secret key
    resave: false,
    saveUninitialized: true
}));

app.use(flash());



// Define __filename and __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOption = {
    origin: 'http://localhost:3000', // Fixed typo
    credentials: true // Fixed the property name
};
app.use(cors(corsOption));



const PORT=5000;
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/blog', blogRoutes);

app.get("/", (req, res) => {
    res.render("signin.ejs");
  });

app.get("/login", (req, res) => {
    res.render("login.ejs");
  });

app.get("/home", async(req,res) =>{
    try {
        const blogs=await Blog.find().sort({ date: -1 }); // Sort by date in descending order;
        // console.log(blogs.title);
        res.render("home.ejs", {blogs});
    } catch (error) {
        console.error("Error fetching blogs:", err);
        res.status(500).send("Internal Server Error"); 
    }
   
});

// app.get("/example", async(req,res) =>{
//     try {
//         const blogs=await Blog.find().sort({ date: -1 }); // Sort by date in descending order;
//         res.render("ex.ejs", {blogs});
//     } catch (error) {
//         console.error("Error fetching blogs:", err);
//         res.status(500).send("Internal Server Error"); 
//     }
   
// });

app.get("/post-view", async(req,res) =>{
    try {
        
        res.render("blogView.ejs");
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error"); 

    }
    
})

app.get("/admin-dashboard", async(req,res) =>{
    try {
        const categories=await Category.find();
        const blogs=await Blog.find();
        res.render("adminDashboard.ejs", { categories,blogs });
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error"); 

    }
    
})

app.post('/:slug', async (req, res) => {
    try {
        const { slug } = req.params; // Get the slug from the URL
        const { category } = req.body; // Get the category from the POST data

         // Fetch the current blog by slug
         const blog = await Blog.findOne({ slug });

         // Fetch related blogs by category (excluding the current blog)
        const relatedBlogs = await Blog.find({
            category:category,
            slug: { $ne: slug }, // Exclude the current blog
        });


        // console.log(blog.title);
        // console.log(relatedBlogs.title);
        // relatedBlogs.forEach(relatedBlog => {
        //     console.log(relatedBlog.title); 
        // });
        

        // Render the blogView.ejs page
        res.render('blogView.ejs', { blog,relatedBlogs });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error"); 
    }

})
  


app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server is running at port ${PORT}`);

}) 




// app.get("/",(req,res)=>{
    
//     res.status(200).json({

//         message:"Hello from Backend xyz abc",
//         success:true
//     })
// })

// blog,          
// Current blog
// relatedBlogs,  
// Related blogs
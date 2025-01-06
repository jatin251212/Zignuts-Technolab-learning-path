import multer from "multer";

// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      // Define the folder to save files
      cb(null, 'public/uploads/featured-image/'); // Replace 'uploads/' with your preferred folder
    },
    filename: (req, file, cb) => {
      // Define the filename format
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, `${file.fieldname}-${uniqueSuffix}-${file.originalname}`);
    },
  });

  // Multer instance
const uploads = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
  });
  
  export default uploads;
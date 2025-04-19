// ✅ Step 1: Load .env variables
import dotenv from "dotenv";
dotenv.config(); // Make sure this is at the VERY TOP

// ✅ Step 2: Import dependencies
import app from "./app.js";
import cloudinary from "cloudinary";

// ✅ Step 3: Configure Cloudinary using .env variables
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Step 4: Start the server using PORT from .env
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server listening at port ${process.env.PORT}`);
});

require('dotenv').config()
const cloudinary = require("cloudinary").v2;

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

module.exports = {
    PORT,
    MONGODB_URI,
    cloudinary
}
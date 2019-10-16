const cloudinary = require ('cloudinary')
const cloudinaryStorage = require ('multer-cloudinary-storage')
const multer = require ('multer')
cloudinary.config({
cloud_name: process.env.CLOUDINARY_NAME,
api_key: process.env.cloud_api_key,
api_secret: process.env.cloud_api_secret   
});

var storage = cloudinaryStorage ({
  cloudinary: cloudinary,
  folder: 'folder-name', 
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb){
 cb(null, file.originalname);
  }
});

const uploadCloud = multer ({ storage: storage});

module.exports = uploadCloud;

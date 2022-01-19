const multer = require('multer');
const { CloudinaryStorage }= require("multer-storage-cloudinary");
const cloudinary = require('../utils/config')
const path = require('path')

// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         folder: "sfc-property",
//         allowedFormats: ["jpg", "png"],
//         transformation: [{ width: 500, height: 500, crop: "limit" }]
//     }
// });

var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'src/uploads');
        },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now());
    }
});


const upload = multer({ storage: storage }).single('image_url')
module.exports = (req, res, next) => {
    try {
        upload(req, res, (err) => {
            if (err) {
                if (err.code === 'LIMIT_FILE_SIZE') {
                    err = 'file size is too large. allowed file size is 500KB'
                }
                return res.status(400).send({
                    message: err
                })
            }
            if (!req.file) {
                return res.status(400).send({
                    message: "No file selected"
                })
            }
            next()
        })
    } catch (err) {
        next(err)
    }
}

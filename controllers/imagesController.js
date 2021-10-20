const express = require("express");
const fs = require("fs");
const errorHandler = require("../helpers/error-handler")
const multer = require("multer");
const path = require("path")
// const upload = require("../middlleware/image-Handler");
const router = express.Router();
router.use(express.json());
//const upload = multer({dest:'../assets/image'});
const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: (req,file,cb)=>{
           cb(null,'C:/MyFirstPro/server-node/assets/image')
    },
      filename: (req, file, cb) => {
          cb(null, parseInt(file.fieldname)
             + path.extname(file.originalname))
           
    }
});
const upload = multer({storage:imageStorage})

router.get("/:id", (req, res) => {
    try {
        const id = req.params.id;
        return (+id && res.sendFile("/MyFirstPro/server-node/assets/images/products/" + id + ".jpg"));
    } catch (err) {
        response.status(400).send(errorHandler(err));
    }
});
router.post("/",upload.single('id'),(req, res) => {
    try {
        res.status(200).send("image uploaded")
    }
    catch (err) {
        // res.status(500).send(errorHandler(err));
        console.log(err);
    }
})

module.exports = router;

const multer = require("multer")
const path = require("path");



const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cd(null,"C:\MyFirstPro\server-node\assets\image")
    },
    filename:(rea,file,cb)=>{
        cb(null,Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage:storage});


module.exports = upload;

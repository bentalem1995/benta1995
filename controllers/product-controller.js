const express = require("express");
const productLogic = require("../bussines-logic/productLogic");
const Product = require("../modules/product");
const verify = require("../middlleware/verify");
const verifyToken = require("../middlleware/verifyToken");
const errorHandler = require("../helpers/error-handler");
const multer = require("multer")
const path = require("path")
const router = express.Router();
router.use(express.json());
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
           cb(null, path.join(__dirname, '..', 'assets/image'))
    },
      filename: (req, file, cb) => {
          const filename = `${Date.now()}${path.extname(file.originalname)}`;
          req.chosenFilename = filename;
          cb(null, filename);
           
    }
});
const fileFilter =(req,file,cb)=>{
    if(['image/jpeg', 'image/jpg', 'image/png','image/jfif'].includes(file.mimetype)){
        cb(null,true)
    }
    else{
        cb(null,false)
    }

}
const upload = multer({storage:storage,fileFilter:fileFilter,limits:{fileSize:1024*1024*5}})
router.get("/images/:image", (req, res) => {
    try {
        const image = req.params.image;
        // return (res.sendFile(__dirname +  "../assets/image/" + image));
        return(res.sendFile(__dirname +"/assets/image/" +image))
    } catch (err) {
        // res.status(404).send(errorHandler(err));
        res.send(err.message)
    }
});

// router.use(verifyToken);

// get sales products
router.get("/sales", async (request, response) => {
    try {
        const saleProducts = await productLogic.getProductSales();
        response.json(saleProducts);

    }
    catch (err) {
        response.status(500).send(errorHandler(err))
        // console.log(err);
    }

})
router.get("/similar", async (request, response) => {
    try {
        const saleProducts = await productLogic.getSimilarProducts();
        response.json(saleProducts);

    }
    catch (err) {
        // response.status(500).send(errorHandler(err))
        console.log(err);
    }

})
router.get("/rings", async (request, response) => {
    try {
        const saleProducts = await productLogic.getRings();
        response.json(saleProducts);

    }
    catch (err) {
        response.status(500).send(errorHandler(err))
        // console.log(err);
    }

})
router.get("/bracelets", async (request, response) => {
    try {
        const saleProducts = await productLogic.getBracelets();
        response.json(saleProducts);

    }
    catch (err) {
        response.status(500).send(errorHandler(err))
        // console.log(err);
    }

})
router.get("/earings", async (request, response) => {
    try {
        const saleProducts = await productLogic.getEarings();
        response.json(saleProducts);

    }
    catch (err) {
        response.status(500).send(errorHandler(err))
        // console.log(err);
    }

})
router.get("/chains", async (request, response) => {
    try {
        const saleProducts = await productLogic.getChains();
        response.json(saleProducts);

    }
    catch (err) {
        response.status(500).send(errorHandler(err))
        // console.log(err);
    }

})

// get all products
router.get("/", (async (request, response) => {
    try {
        const products = await productLogic.getAllProduct();
        return response.json(products);
    }
    catch (err) {
        // response.status(404).send(errorHandler(err))\
        console.log(err)
    }

}));
// get one product
router.get("/:id", async (request, response) => {
    try {
        const id = + request.params.id;
        const product = await productLogic.getOneProduct(id);
        return response.json(product);
    }
    catch (err) {
        response.status(404).send(errorHandler(err))
    }
});
//add products
router.post("/", upload.single('image'), async (request, response) => {
    try {
        const image =request.chosenFilename
        const newProduct = new Product(undefined, request.body.name, request.body.price, request.body.stock,image,request.body.category,request.body.description);
        // console.log(newProduct);
        await productLogic.addProduct(newProduct);
        response.json(newProduct);
    }
    catch (err) {
        response.status(404).send(errorHandler(err))
        console.log(err);

    }
});
// update products
router.put("/:id", async (request, response) => {
    try {
        const product = new Product(+request.params.id, request.body.name, request.body.price, request.body.stock);
        await productLogic.updateProduct(product);
        response.json(product);
    }
    catch (err) {
        response.status(500).send(errorHandler(err))
    }

})
// delete product
router.delete("/:id", async (request, response) => {
    try {
        const id = +request.params.id;
        await productLogic.deleteProduct(id);
        response.sendStatus(204);
    }
    catch (err) {
        response.status(500).send(errorHandler(err))

    }
});














module.exports = router;












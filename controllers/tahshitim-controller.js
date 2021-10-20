const { json } = require("body-parser");
const { response, request } = require("express");
const express = require("express");
const fs = require("fs");
const productLogic = require("../bussines-logic/productLogic");
const errorHandler = require("../helpers/error-handler")
const tahshitimLogin = require("../bussines-logic/tahshitimLogic");
const Product = require("../modules/product");
const router = express.Router();
router.use(express.json());

// get all products
router.get("/",(async (request,response)=>{
    try{
    const products = await tahshitimLogin.getAllProduct();
     return response.json(products);
    }
    catch(err){
        console.error(err);
    }

}));
// get one product
router.get("/:id" ,async(request,response)=>{
    try{
    const id = + request.params.id;
    const product =await tahshitimLogin.getOneProduct(id);
    return response.json(product);
    }
    catch(err){
        console.error(err);
    }
    });
    //add products
router.post("/" ,async (request,response)=>{
    try{
        
       // console.log(req.body)
      const newProduct = new Product(undefined,request.body.name,request.body.price ,request.body.stock);
       await productLogic.addProduct(newProduct);
       response.json(newProduct);
    }
    catch(err){
      console.log(err);
    }
});
module.exports = router;

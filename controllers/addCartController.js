const { json } = require("body-parser");
const { response, request } = require("express");
const express = require("express");
const fs = require("fs");
const productLogic = require("../bussines-logic/productLogic");
const Product = require("../modules/product");
const errorHandler = require("../helpers/error-handler")
const router = express.Router();
router.use(express.json());



router.put("/add/:id",async (request, response) => {
    const id = +request.params.id
    const product =await productLogic.getOneProduct(id);
    if (!product) {
        response.sendStatus(400).send("product not found");
        return
    }
    if (!request.session.cart) {
        request.session.cart = [];
    }
    request.session.cart.push(product);
    response.json(request.session.cart);
})
router.delete("/:id",async(request,response)=>{
    try{
    const id =+request.params.id;
    if(!request.session.cart){
        response.status(400).send("the cart is empty")
        return;
    }
    const index = request.session.cart.findIndex(p=>p.id === id);
    if (index===-1){
        response.status(400).send("the product is not found");
        return;
    }
    request.session.cart.splice(index,1)
    response.end();
    }catch(err){
        response.status(400).send(errorHandler(err));
    }
})

router.get("/list" , (request,response)=>{
    
    if (!request.session.cart) {
        response.json({msg:"cart empty"})
        return;

    }
   response.json(request.session.cart);

    
})

  







module.exports = router;



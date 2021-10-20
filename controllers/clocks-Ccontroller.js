const verifyToken = require("../middlleware/verifyToken");
const errorHandler = require("../helpers/error-handler")
const productLogic = require("../bussines-logic/productLogic");
const express = require("express");
const router = express.Router();
router.use(express.json());
router.get("/",async(req,res)=>{
    try{
        const clocks = await productLogic.getClocks();
        res.status(200).json(clocks)
    }
    catch(err){
        res.status(500).send(errorHandler(err));
    }

})












module.exports = router;
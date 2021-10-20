const { json } = require("body-parser");
const { response } = require("express");
const express = require("express");
const forumLogicLogic = require("../bussines-logic/forum-logic");
const Forum = require("../modules/forum");
const errorHandler = require("../helpers/error-handler")
const router = express.Router();
router.use(express.json());
router.get("/" ,async (request,response)=>{
    try{
        const forum = await forumLogicLogic.getAllForum();
        response.json(forum)  
    }
    catch(err){
         response.status(500).json(errorHandler(err));
    }
})

router.post("/" ,async (request,response)=>{
    try {
        const forum = new Forum(undefined, request.body.username, request.body.title, request.body.text);
       await forumLogicLogic.addForum(forum);
        response.json(forum);
    }
    catch (err) {
        response.status(500).send(errorHandler(err));
    }


})





module.exports = router;


const express = require("express");
const jwt = require("jsonwebtoken");
const Login = require("../modules/login");
const LoginLogic = require("../bussines-logic/loginLogic");
const config = require("../config-dev.json")
const errorHandler = require("../helpers/error-handler");
const { response } = require("express");
const verifyToken = require("../middlleware/verifyToken")

// global.config = require("../config-pro.json");



// getting users
verifyToken()
const router = express.Router();
router.use(express.json());
router.get("/", async (request, response) => {
    try {
        const login = await LoginLogic.getLogin();
        response.json(login);
    }
    catch (err) {
      response.status(404).send(errorHandler(err));
    }
});
// register
router.post("/register", async (req, res) => {
    try {
        const login = new Login(undefined, req.body.username, req.body.password, req.body.email);
        const response = await LoginLogic.addLogin(login);
        // console.log(response);
        //  req.session.isLogin = true;
        delete response.password;
        const token = jwt.sign({ response }, config.jwt.SecretCode, { expiresIn: "30d" })
        response.token = token;
        res.status(200).json({response})
    }
    catch (err) {
        response.status(500).send(errorHandler(err));
    }
})
//login
router.post("/login", async (req, res) => {
    const username = req.body.username;
    let password = req.body.password;
    const login = new Login(undefined, username, password, undefined);
    try {
      
        const response = await LoginLogic.checkUser(login)
        if (response === undefined) {
           
            res.status(200).send({ msg: "wrong" })
            return;
        }
        password = response.PassWord
        if (response.UserName === username && response.PassWord === password) {
            // req.session.isLogin = true;
            const token = jwt.sign({ response }, config.jwt.SecretCode, { expiresIn: "30d" })
            delete response.PassWord;
            // response.token = token;
            response.token = token
            res.status(200).json({ msg: "write", response})
        }

    }
    catch (err) {
    //   response.status(404).send(errorHandler(err));
    console.log(err);
        
    }
})
//log out
router.post("/logout", (req, res) => {
    try {
        req.session.destroy();
        res.end();
    }
    catch (err) {
      response.status(400).send(errorHandler(err));
    }
})
module.exports = router;












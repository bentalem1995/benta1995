const express = require("express");
// global.config = require("./config-pro.json");
// global.config = require("./config-dev.json");
const Server = express();
//global.isProduction =false;
const bodyParser = require("body-parser");
const cookies = require("cookie-parser");
const productsController = require("./controllers/product-controller")
const loginController = require("./controllers/login-controller");
const addCartController = require("./controllers/addCartController")
const forumController = require("./controllers/forumController")
const expressSession = require("express-session");
Server.use(expressSession({
   name:"northwind",
   secret:"bentaisthebestone" ,
   resave:true,
   saveUninitialized:false
}))
const PORT = process.env.PORT || 5000;
const listener =   Server.listen(PORT, ()=>{console.log("Lessening http://localhost:5000")});
Server.use("/api/products",productsController);
Server.use("/api/cart",addCartController);
Server.use("/api/login" ,loginController );
Server.use("/api/forum" ,forumController);
Server.use("/api/clocks" ,clocksController)
Server.use(cookies());
Server.use(bodyParser({extended:true}));


Server.use(express.json());//allowing a use of pragmas from the request
Server.use(express.static(__dirname + "/build"));//setting home page of site
Server.get('/*', (req, res) => res.sendFile(__dirname + "/build/index.html"));













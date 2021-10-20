const express = require("express");
// global.config = require("../server-node/config-dev.json");
 global.config = require( __dirname + "/config-pro.json");
const Server = express();
//global.isProduction =false;
const bodyParser = require("body-parser");
const cookies = require("cookie-parser");
const productsController = require("./controllers/product-controller")
const loginController = require("./controllers/login-controller");
const addCartController = require("../server-node/controllers/addCartController")
const forumController = require("../server-node/controllers/forumController")
const imagesController =require("../server-node/controllers/imagesController")
const clocksController = require("../server-node/controllers/clocks-Ccontroller")
const expressSession = require("express-session");
Server.use(expressSession({
   name:"northwind",
   secret:"bentaisthebestone" ,
   resave:true,
   saveUninitialized:false
}))
const listener =   Server.listen(5000,()=>{console.log("Lessening http://localhost:5000")});
Server.use("/api/products",productsController);
Server.use("/api/images",imagesController);
Server.use("/api/cart",addCartController);
Server.use("/api/login" ,loginController );
Server.use("/api/forum" ,forumController);
Server.use("/api/clocks" ,clocksController)
Server.use(cookies());
Server.use(bodyParser({extended:true}));


Server.use(express.json());//allowing a use of pragmas from the request
Server.use(express.static(__dirname + "/build"));//setting home page of site













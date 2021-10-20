const dal = require("../data-acsess-layer/dal");
const session = require("express-session");
const hash = require("../helpers/hash");


async function getLogin()
{


   const qry = "SELECT userID as id, userName as name , PassWord as password , Email as email FROM login";
   const login = await dal.executeAsync(qry);
   return login;
 
}
async function addLogin(login) {
  
      login.password =hash(login.password)
     // console.log(login.password)
      const qry = `INSERT INTO login (UserName,PassWord,Email) VALUES ('${login.username}' ,'${login.password}','${login.email}')`;
      const info = await dal.executeAsync(qry);
      login.id = info.insertId;
      return login;
 
}
async function checkUser(login){
 
      login.password =hash(login.password)
      //console.log(login.password);
      try{
            const qry = `SELECT * FROM login WHERE UserName = ? AND PassWord = ?`;
            const info = await dal.executeAsync(qry, [login.username, login.password]);
         //   console.log(info);
            return (info[0])
      }catch(err){
            return err;
      }
    
   
}

module.exports = {getLogin , addLogin ,checkUser};
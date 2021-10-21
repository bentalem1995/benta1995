const dal = require("../data-acsess-layer/dal");
const cache = require("memory-cache");

async function getAllForum() {
   try {
      const qry = `SELECT ForumID as id , UserName as username, Title as title , UserText as text FROM forum `;
      const forum = dal.executeAsync(qry);
      cache.put("forum" ,forum,1000*60*60);
      return cache.get("forum");
   }
   catch (err) {
      console.log(err);
   }
}
async function addForum(forum) {
    try {
       const qry = `INSERT INTO forum (UserName,Title,UserText) VALUES ('${forum.username}' ,'${forum.title}','${forum.text}')`;
       const info = await dal.executeAsync(qry);
       forum.id = info.insertId;
       return forum;
    }
    catch (err) {
       console.error(err);
    }
 }

 module.exports ={getAllForum ,addForum}
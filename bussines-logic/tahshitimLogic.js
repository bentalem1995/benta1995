const { response } = require("express");
const dal = require("../data-acsess-layer/dal");

async function getAllProduct()
{
   try{

   const qry = "SELECT TahshitimID as id, TahshitimName as name , TahshitimPrice as price , TahshitimStock as stock FROM tahshitim";
   const products = await dal.executeAsync(qry);
   return products;
   }
   catch(err){
      console.log(err);
   }
}
async function getOneProduct(id){
   try{
   const qry = `SELECT TahshitimID as id, TahshitimName as name , TahshitimPrice as price , TahshitimStock as stock FROM tahshitim WHERE TahshitimID =${id}`;
   const products = await dal.executeAsync(qry);
   const product = products[0];
   return product;
   }
   catch(err){
      console.log(err);
   }
}

module.exports = {
   getAllProduct,
   getOneProduct
}

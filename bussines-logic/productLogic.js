const getDelay = require("../tester/getDelay");
const { response } = require("express");
const dal = require("../data-acsess-layer/dal");
const cache = require("memory-cache");

async function getAllProduct()
{
   
     // if (!cache.get("products")) {

         const qry = "SELECT ProductID as id, ProductName as name , UnitPrice as price , UnitsInStock as stock ,ProductImage as image ,Description as description FROM products";
         const products = await dal.executeAsync(qry);
        // await getDelay(5000);
        // cache.put("products", products,1000*60*60);
     // }
     // return cache.get("products");
     return products;
  
}
async function getOneProduct(id){
   
   const qry = `SELECT ProductID as id, ProductName as name , UnitPrice as price , UnitsInStock as stock,ProductImage as image,Description as description FROM products WHERE ProductID =${id}` ;
   const products = await dal.executeAsync(qry);
   const product = products[0];
   return product;
  
}


async function addProduct(product){
   const qry = `INSERT INTO products (ProductName,UnitPrice,UnitInStock,ProductImage,CategoryID,Description) VALUES ('${product.name}' ,${product.price},${product.stock},'${product.image}',${product.categoryID},'${product.description}')`;   
   const info = await dal.executeAsync(qry);
   product.id = info.insertId;
   return product;
 

}
async function updateProduct(product){
   const qry = `UPDATE products SET ProductName = '${product.name}' , UnitPrice = ${product.price} , UnitsInStock = ${product.stock},ProductImage='${product.image}' WHERE ${product.id} =ProductID`;
   const updatedProduct = await dal.executeAsync(qry);
   return updateProduct;
}
async function deleteProduct(id){
   const products = await getAllProduct();
   const product = products.find(p=> p.id ===id );
   const qry =`DELETE FROM Products WHERE ProductID = ${product.id}`;
   const info = await dal.executeAsync(qry);
   return info;

   
}
async function getProductSales(){
  
   const qry = `SELECT ProductID as id, ProductName as name , UnitPrice as price , UnitsInStock as stock, ProductImage as image FROM products WHERE UnitsInStock >20`;
   const saleProducts = dal.executeAsync(qry);
   return saleProducts
 
}
async function getSimilarProducts(){
  
   const qry = `SELECT ProductID as id, ProductName as name , UnitPrice as price , UnitsInStock as stock, ProductImage as image ,Description as description FROM products WHERE UnitsInStock >10`;
   const saleProducts = dal.executeAsync(qry);
   return saleProducts
}

async function getClocks(){
   const qry = `SELECT ProductID as id, ProductName as name , UnitPrice as price , UnitsInStock as stock,ProductImage as image  FROM products WHERE CategoryID=3`;
   const clocks = dal.executeAsync(qry);
   return clocks
}
async function getBracelets(){
   const qry = `SELECT ProductID as id, ProductName as name , UnitPrice as price , UnitsInStock as stock,ProductImage as image  FROM products WHERE CategoryID=2`;
   const clocks = dal.executeAsync(qry);
   return clocks
}
async function getRings(){
   const qry = `SELECT ProductID as id, ProductName as name , UnitPrice as price , UnitsInStock as stock,ProductImage as image  FROM products WHERE CategoryID=1`;
   const clocks = dal.executeAsync(qry);
   return clocks
}
async function getEarings(){
   const qry = `SELECT ProductID as id, ProductName as name , UnitPrice as price , UnitsInStock as stock,ProductImage as image  FROM products WHERE CategoryID=4`;
   const clocks = dal.executeAsync(qry);
   return clocks
}
async function getChains(){
   const qry = `SELECT ProductID as id, ProductName as name , UnitPrice as price , UnitsInStock as stock,ProductImage as image  FROM products WHERE CategoryID=5`;
   const clocks = dal.executeAsync(qry);
   return clocks
}



 
module.exports = {
    getAllProduct,
    getOneProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductSales,
    getClocks,
    getEarings,
    getBracelets,
    getChains,
    getRings,
    getSimilarProducts

}
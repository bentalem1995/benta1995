class Product{
    constructor(id ,name,price,stock,image,categoryID,description){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.categoryID =categoryID;
        this.image =image;
        this.description=description
    }
}
module.exports = Product;
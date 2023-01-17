const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
   name:String,
   image:[String],
   des:String,
   rating:String,
   price:String,
   category:String,
   customer_category:String
})

const ProductModel = mongoose.model("product",productSchema)

module.exports = {
    ProductModel
}

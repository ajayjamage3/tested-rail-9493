const mongoose = require("mongoose")
const cartSchema = mongoose.Schema({
  userId:String,
  productId:String
})

const CartModel = mongoose.model("cart",cartSchema)

module.exports = {
    CartModel
}

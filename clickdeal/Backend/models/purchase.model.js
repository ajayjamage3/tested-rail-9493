const mongoose = require("mongoose")
const purchaseSchema = mongoose.Schema({
  userId:String,
  productId:[String],
  Date:String,
  payment:{
    card:String,
    date:String,
    total:String
  }
})

const PurchaseModel = mongoose.model("purchase",purchaseSchema)

module.exports = {
    PurchaseModel
}

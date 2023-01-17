const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
   name:String,
   email:String,
   phone:String,
   age:String,
   password:String,
   gender:String,
   address:{
        pincode:String,
        city:String,
        street:String,
        houseno:String
   }
})

const UserModel = mongoose.model("user",userSchema)

module.exports = {
    UserModel
}

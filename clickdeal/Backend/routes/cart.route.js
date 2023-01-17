const express = require("express")
const app = express()
app.use(express.json())
const {CartModel} = require("../models/cart.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const cartRouter = express.Router()

cartRouter.get("/",async(req,res)=>{
    console.log(query)
   res.send(await CartModel.find())
})

cartRouter.post("/create",async(req,res)=>{
    try {
       const posts = new CartModel(req.body)
       await posts.save()
       res.send("Added to cart")
    } catch (error) {
        console.log(error)
        res.send("something went wrong")
    }
})

cartRouter.delete("/delete/:id",async(req,res)=>{
    try {
        await CartModel.findByIdAndDelete({_id:req.params.id})
        res.send("Deleted from cart")
    } catch (error) {
        console.log(error)
        res.send("something went wrong")
    }
})

module.exports = {
    cartRouter
}
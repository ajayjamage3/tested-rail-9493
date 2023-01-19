const express = require("express")
const app = express()
app.use(express.json())
const {CartModel} = require("../models/cart.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const cartRouter = express.Router()

cartRouter.get("/",async(req,res)=>{
   res.send(await CartModel.find(req.query))
})

cartRouter.post("/create",async(req,res)=>{
    try {
       const posts = new CartModel(req.body)
       await posts.save()
       res.send({"status":"Added to cart"})
    } catch (error) {
        console.log(error)
        res.send({"status":"something went wrong"})
    }
})

cartRouter.delete("/delete/:id",async(req,res)=>{
    try {
        await CartModel.findByIdAndDelete({_id:req.params.id})
        res.send({"status":"Deleted from cart"})
    } catch (error) {
        console.log(error)
        res.send({"status":"something went wrong"})
    }
})

module.exports = {
    cartRouter
}
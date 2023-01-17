const express = require("express")
const app = express()
app.use(express.json())
const {PurchaseModel} = require("../models/purchase.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const purchaseRouter = express.Router()

purchaseRouter.get("/",async(req,res)=>{
    console.log(query)
   res.send(await PurchaseModel.find())
})

purchaseRouter.post("/create",async(req,res)=>{
    try {
       const posts = new PurchaseModel(req.body)
       await posts.save()
       res.send("Added to cart")
    } catch (error) {
        console.log(error)
        res.send("something went wrong")
    }
})




module.exports = {
    purchaseRouter
}
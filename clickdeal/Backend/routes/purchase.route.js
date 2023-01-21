const express = require("express")
const app = express()
app.use(express.json())
const {PurchaseModel} = require("../models/purchase.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { query } = require("express")
const purchaseRouter = express.Router()

purchaseRouter.get("/",async(req,res)=>{
   res.send(await PurchaseModel.find(req.query))
})

purchaseRouter.post("/create",async(req,res)=>{
    try {
       const posts = new PurchaseModel(req.body)
       await posts.save()
       res.send({"status":"product purchased"})
    } catch (error) {
        console.log(error)
        res.send({"status":"something went wrong"})
    }
})




module.exports = {
    purchaseRouter
}
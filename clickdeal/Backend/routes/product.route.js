const express = require("express")
const app = express()
app.use(express.json())
const {ProductModel} = require("../models/products.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const productRouter = express.Router()

productRouter.get("/",async(req,res)=>{
    const query = req.query
    console.log(query)
   res.send(await ProductModel.find(query))
})

productRouter.post("/create",async(req,res)=>{
    try {
        let data = req.body
        data.forEach(async(element)=> {
            const posts = new ProductModel(element)
            await posts.save()
        });
       
       res.send("Posted Done")
    } catch (error) {
        console.log(error)
        res.send("something went wrong")
    }
})

productRouter.patch("/update/:id",async(req,res)=>{
    try {
        await ProductModel.findByIdAndUpdate({_id:req.params.id},req.body)
        res.send("Updated")
    } catch (error) {
        console.log(error)
        res.send("something went wrong")
    }
})
productRouter.delete("/delete/:id",async(req,res)=>{
    try {
        await ProductModel.findByIdAndDelete({_id:req.params.id})
        res.send("Deleted")
    } catch (error) {
        console.log(error)
        res.send("something went wrong")
    }
})


module.exports = {
    productRouter
}
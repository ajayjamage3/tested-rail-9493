const express = require("express")
const app = express()
app.use(express.json())
const {ProductModel} = require("../models/products.model")
const renderRouter = express.Router()
renderRouter.get("/show",async(req,res)=>{
    const query = req.query
    console.log(query)
   res.send(await ProductModel.find(query))
})

module.exports = {
    renderRouter
}
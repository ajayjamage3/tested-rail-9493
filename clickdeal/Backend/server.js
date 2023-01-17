const express = require("express")
const app = express()
app.use(express.json())
const {connection} = require("./config/db")
const cors = require("cors")
app.use(cors())
const {authenticate} = require("./middlewares/auth.mid")
const {userRouter} = require("./routes/user.route")
const {renderRouter} = require("./routes/render.route")
const {cartRouter} = require("./routes/cart.route")
const {productRouter} = require("./routes/product.route")
const {purchaseRouter} = require("./routes/purchase.route")
require("dotenv").config()
app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.use("/user",userRouter)
app.use("/render",renderRouter)

app.use(authenticate)
app.use("/cart",cartRouter)
app.use("/product",productRouter)
app.use("/purchase",purchaseRouter)


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log(err)
    }
    console.log(`Server running at ${process.env.port}`)
})
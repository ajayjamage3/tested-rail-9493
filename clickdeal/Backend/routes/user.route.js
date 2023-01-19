const express = require("express")
const app = express()
app.use(express.json())
const {UserModel} = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const userRouter = express.Router()
require("dotenv").config()
userRouter.get("/",async(req,res)=>{
    const query = req.query
    console.log(query)
   res.send(await UserModel.find(query))
})
userRouter.patch("/address/:id",async(req,res)=>{
    try {
        await UserModel.findByIdAndUpdate({_id:req.params.id},req.body)
        res.send({"status":"Address added"})
    } catch (error) {
        console.log(error)
        res.send({"status":"something went wrong"})
    }
})
userRouter.post("/register",async(req,res)=>{
    const {name,email,phone,age,password,gender} = req.body
    try {
        bcrypt.hash(password,5,async(err,sec_pass)=>{
            if(err){
                console.log(err)
            }else{
                const user = new UserModel({name,email,password:sec_pass,gender,phone,age})
                await user.save()
                res.send({"status":"user registered succesfully"})
            }
        })
    } catch (error) {
        res.send(error)
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
    try {
       const user = await UserModel.find({email})
       if(user.length>0){
        const hashed_pass = user[0].password
        bcrypt.compare(password,hashed_pass,(err,result)=>{
            if(result){
                const token = jwt.sign({userId:user[0]._id},process.env.key)
                res.send({"msg":"login succesfull","token":token,"userId":user})
            }
            else{
                res.send({"status":"wrong password"})
            }
        })
       }
       else{
            res.send({"status":"wrong username"})
       }
    } catch (error) {
        res.send(error)
    }
})

module.exports = {
    userRouter
}
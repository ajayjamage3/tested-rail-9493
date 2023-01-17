const express = require("express")
const app = express()
app.use(express.json())
const {UserModel} = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const userRouter = express.Router()

userRouter.get("/",async(req,res)=>{
    const query = req.query
    console.log(query)
   res.send(await UserModel.find(query))
})
userRouter.patch("/address/:id",async(req,res)=>{
    try {
        await UserModel.findByIdAndUpdate({_id:req.params.id},req.body)
        res.send("address added")
    } catch (error) {
        console.log(error)
        res.send("something went wrong")
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
                res.send("User registered succesully")
            }
        })
    } catch (error) {
        console.log(error)
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
                const token = jwt.sign({userId:user[0]._id},"social")
                res.send({"msg":"login succesfull","token":token,"userId":user})
            }
            else{
                res.send("Wrong Password")
            }
        })
       }
       else{
            res.send("Wrong Username")
       }
    } catch (error) {
        console.log(error)
    }
})

module.exports = {
    userRouter
}
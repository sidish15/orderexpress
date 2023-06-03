const express=require("express");
const router=express.Router();
const bcrypt=require("bcryptjs")
const jwt =require("jsonwebtoken")
const User=require("../model/UserSchema")

//Registration route
router.post("/register",async(req,res)=>{
        const {username,password,role}=req.body;
try{
 //finding if current user exist or not
 const response=await User.findOne({username:username});
 if(response){return res.status(402).json({error:"User already exist"});}
 else{
        //new user or new document entry
        const user =new User({username,password,role})
 
        //password will be hashed before the below function
        const registered=await user.save();
        if(registered){
                res.status(201).json({message:"Registration successfully done"})
        }
 }
        
}catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server Error"})
}

})


//Login route
//async await(findOne,compare,)
router.post("/login",async (req,res)=>{
const {username,password}=req.body;
try{
//Find the user by username
const userLogin=await User.findOne({username:username});
if(!userLogin){
        return res.status(404).json({ message: 'User not found' });
}
//Compare password
const isMatch=await bcrypt.compare(password, userLogin.password);
if(!isMatch){
        return res.status(400).json({ message: 'Invalid credentials' });
}
//calling a generateAuthToken() function to get the value of jwt
const token =await userLogin.generateAuthToken();
console.log(token)

res.cookie("jwtoken",token,{
        httpOnly:true
})

//User authentication successfull
return res.status(200).json({ message: 'Login successful' });
}catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
}
})

module.exports = router;
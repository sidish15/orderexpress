const mongoose =require("mongoose");
const bcrypt=require("bcryptjs")
const jwt =require("jsonwebtoken") 

const userSchema =new mongoose.Schema({
        username: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, enum: ['Manufacturer', 'Transporter'], required: true },
        tokens:[{
                token:{
                        type:String,
                        required:true,
                }
        }]
})



//middleware for hashing the password
userSchema.pre("save",async function(next){
        console.log("hi from inside");
        if(this.isModified("password")){
                this.password = await bcrypt.hash(this.password,12);
        }
        next();
})

//defining jwt function
userSchema.methods.generateAuthToken= async function(){
        try{
//generating token
console.log("generatingAuth method is called from UserSchema file")
let token =jwt.sign({_id:this._id},"DAILYSAYMYNAMESIDDHARTHSINGHBHADORIA")
this.tokens=this.tokens.concat({token:token})
await this.save()
return token;
        }catch(err){
console.log(err)
        }
}
//making a new document
const User=mongoose.model("USER",userSchema);

module.exports=User;
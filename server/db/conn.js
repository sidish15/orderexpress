const mongoose=require("mongoose")
const DB="mongodb+srv://siddharthbhadoria17:IvFje4XbVxx6uc8k@cluster0.wrp8cau.mongodb.net/orderxpress?retryWrites=true&w=majority"
mongoose.connect(DB).then(()=>{
        console.log(`Backend connected to atlas`)
}).catch((err)=>{
console.log(`no connection`)
})
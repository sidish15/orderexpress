const mongoose=require("mongoose")

const messageSchema=new mongoose.Schema({
        orderID: { type: String, required: true },
        to: { type: String, required: true },
        from: { type: String, required: true },
        quantity: { type: String, required: true },
        address: { type: String, required: true },
        transporter: { type: String, required: true },
       price: { type: Number }
})


const Message=mongoose.model("MESSAGE",messageSchema);

module.exports =Message;
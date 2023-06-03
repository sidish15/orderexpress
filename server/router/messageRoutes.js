const express=require("express")
const router=express.Router();
const Message =require("../model/MessageSchema");


//Route to save a new message(MANUFACTURE --> TRANSPORTER)
router.post("/messages",async(req,res)=>{
        const { orderID, to, from, quantity, address, transporter } = req.body;
        try{
 //Create a new message
 const newMessage=new Message({orderID,to,from,quantity,address,transporter});
//Save the message to the database
await newMessage.save();
res.status(201).json({message:"Message saved successfully"});

        }catch(err){
                console.log(err);
                res.status(500).json({message:"Internal server error"})
        }
})

//Route to get all messages(TRANSPORTER READING ALL THE MESSAGES)
router.get('/messages', async (req, res) => {
        try {
          // Retrieve all messages from the database
          
          const messages = await Message.find();
          console.log("all messages are received")
          console.log(messages);
          res.send(messages)
          // res.status(200).json(messages);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        }
      });

// Route for Transporter to send a reply message
router.post("/messages/reply",async (req,res)=>{
  console.log(req.body)
  const {orderID,price}=req.body;
  try{
  //Find the message in the database based on the provided orderID
  const message= await Message.findOne({orderID:orderID});
  if(!message){
    return res.status(404).json({ message: 'Message not found' });
  }
//Update the message with the Transporter's reply and price
    
    message.price = price;

//Save the updated message to the database
await message.save();
res.status(200).json({ message: 'Reply sent successfully' });

  }catch(err){
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
})
      
module.exports =router;

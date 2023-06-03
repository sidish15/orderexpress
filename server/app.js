const express = require("express");
const app=express();

//connecting to MongoDB
require("./db/conn");

//Middlewares
app.use(express.json())

//Routes
app.use(require("./router/authRoutes"))
app.use(require("./router/messageRoutes"))

//starting the server
app.listen("5000",()=>{
        console.log(`Server started on port 5000`)
})

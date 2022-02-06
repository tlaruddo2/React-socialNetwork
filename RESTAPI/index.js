const express = require("express"); //node.js framework, built application on this
const app = express(); //
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

//to use env file
dotenv.config();

//connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () =>{
    console.log("connected to MongoDB");
});

//middleware (body parser when we make post request)
app.use(express.json());
app.use(helmet());
app.use(morgan("coomon"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

// //req: request, res:response
// app.get("/", (req,res)=>(
//     res.send("welcome to homepage")
// ));

// app.get("/users", (req,res)=>(
//     res.send("welcome to user page")
// ));

//express app 
app.listen(8800,() => {
    console.log ("backend server is running")
})
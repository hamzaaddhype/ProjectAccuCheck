const express = require('express');
const dotenv = require('dotenv');
const app = express();

const Products = require('./models/productSchema')
// Today
const multer = require('multer');
const path= require('path');
const ejs = require('ejs');

var cors = require('cors')
dotenv.config({path:'config.env'})
require('./config/conn')
app.use(cors());


app.use("/uploads", express.static("uploads"));
app.use("/products", express.static("uploads"));
const get_Admin_routes=require("./routes/Admin")
const get_User_routes=require("./routes/User")

app.use(express.json());

const { json } = require('body-parser');


app.use('/Admin',get_Admin_routes)
app.use('/User',get_User_routes)

// Deployment
__dirname = path.resolve()

if(process.env.NODE_ENV === 'production')
{
    app.use(express.static(path.join(__dirname,'/frontend/build')));
    app.get("*",(req, res) =>{
        res.sendFile(path.resolve(__dirname,'frontend', 'build', 'index.html'));
    });
}
else{
    app.get("/",(req, res) =>{
        res.send("Api is not Running");
    })
}


const PORT=process.env.PORT

 

// Running server 
app.listen(PORT, (req, res)=>{
    console.log(`Server listening on Port  ${PORT}` )
})

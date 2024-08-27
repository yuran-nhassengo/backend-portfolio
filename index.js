const express = require('express');
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors")

const connectDB = require("./connect/database")

const port =process.env.PORT;


connectDB();



app.listen(port, ()=>{
    console.log(`Servidor Connectado.... ${port}`);
});




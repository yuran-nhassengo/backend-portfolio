const express = require('express');
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors")

const connectDB = require("./connect/database")

const port =process.env.PORT;




connectDB();

app.use(express.json());

app.use(express.urlencoded({extended: false}));
app.use(cors());



app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`);
});




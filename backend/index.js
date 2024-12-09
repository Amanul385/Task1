const express = require("express");
const app =express();
const cors = require("cors")

require("dotenv").config();
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json());


const route = require("./routes/user")
app.use("/api/v1",route);

const dbConnect = require("./config/database")
dbConnect();

app.listen(PORT ,()=>{
    console.log(`Your server are Run ${PORT}`);
})
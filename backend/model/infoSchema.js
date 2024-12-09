const mongoose = require("mongoose");

const infoData = new mongoose.Schema({

    firstname:{
        type:String,
        required:true,
    },

    lastname:{
        type:String,
        required:true,
    },
    imagePath:{
        type:String,
        required:true,
    }
    
})

module.exports = mongoose.model("info",infoData);
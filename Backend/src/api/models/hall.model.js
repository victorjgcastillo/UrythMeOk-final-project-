const mongoose = require('mongoose');
//---------------------------------INPUT---------------------------------

// 1 - SCHEMA
const hallSchema = mongoose.Schema(
    {
        name: {type:String, required:true},
        localization: {type:String, required:true},
        city: {type:String, required:true},
        img: {type:String},
        map: {type:String}
    },
    {timestamps:true}
);

// 2 - MODELO Movie
const Hall = mongoose.model('hall',hallSchema);

//---------------------------------OUTPUT---------------------------------
module.exports = Hall;


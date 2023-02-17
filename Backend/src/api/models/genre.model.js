const mongoose = require('mongoose');
//---------------------------------INPUT---------------------------------

// 1 - SCHEMA
const genreSchema = mongoose.Schema(
    {
        id: {type:'String', required:true},
        name: {type:'String', required:true},
        img: {type:'String'},
    },
    {timestamps:true}
);

// 2 - MODELO Movie
const Genre = mongoose.model('genre',genreSchema);

//---------------------------------OUTPUT---------------------------------
module.exports = Genre;


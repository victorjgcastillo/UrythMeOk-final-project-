const mongoose = require('mongoose');
//---------------------------------INPUT---------------------------------

// 1 - SCHEMA
const artistSchema = mongoose.Schema(
    {
        name: {type:'String', required:true},
        genres:[{type:mongoose.Schema.Types.ObjectId, ref: 'genre'}]  ,
        biography: {type:'String'},
        img:{type:'String'},
    },
    {timestamps:true}
);

// 2 - MODELO Movie
const Artist = mongoose.model('artist',artistSchema);

//---------------------------------OUTPUT---------------------------------
module.exports = Artist;


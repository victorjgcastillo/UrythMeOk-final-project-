const mongoose = require('mongoose');
//---------------------------------INPUT---------------------------------

// 1 - SCHEMA
const concertSchema = mongoose.Schema(
    {
        date: {type: String, required:true},
        time: {type: String, required:true},
        price: {type: mongoose.Types.Decimal128, required:true},
        artists: [{type:mongoose.Schema.Types.ObjectId, ref: 'artist'}],
        hall: {type:mongoose.Schema.Types.ObjectId, ref: 'hall'},
        tickets: [{type:mongoose.Schema.Types.ObjectId, ref: 'ticket'}]
    },
    {timestamps:true}
);

// 2 - MODELO Movie
const Concert = mongoose.model('concert',concertSchema);

//---------------------------------OUTPUT---------------------------------
module.exports = Concert;
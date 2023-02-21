const mongoose = require('mongoose');
//---------------------------------INPUT---------------------------------

// 1 - SCHEMA
const concertSchema = mongoose.Schema(
    {
        name: {type: String, required:true},
        date: {type: String, required:true},
        time: {type: String, required:true},
        price: {type: Number, required:true},
        artists: [{type:mongoose.Schema.Types.ObjectId, ref: 'artists'}],
        hall: {type:mongoose.Schema.Types.ObjectId, ref: 'halls'},
        tickets: [{type:mongoose.Schema.Types.ObjectId, ref: 'tickets'}]
    },
    {timestamps:true}
);

// 2 - MODELO Movie
const Concert = mongoose.model('concert',concertSchema);

//---------------------------------OUTPUT---------------------------------
module.exports = Concert;
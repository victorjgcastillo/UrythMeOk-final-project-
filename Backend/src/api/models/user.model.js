const mongoose = require('mongoose');
//---------------------------------INPUT---------------------------------

// 1 - SCHEMA
const userSchema = mongoose.Schema(
    {
        email: {type: String, required:true},
        password: {type: String, required:true},
        name: {type: String, required:true},
        postalCode: {type: String},
        concerts: [{type:String}],
        desiredConcerts: [{type:String}],//mongoose.Schema.Types.ObjectId, ref: 'desiredConcert'
        idFanClub: {type:mongoose.Schema.Types.ObjectId, ref: 'fanClub'}
    },
    {timestamps:true}
);

// 2 - MODELO Movie
const User = mongoose.model('user',userSchema);

//---------------------------------OUTPUT---------------------------------
module.exports = User;
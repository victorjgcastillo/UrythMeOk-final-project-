const mongoose = require('mongoose');
//---------------------------------INPUT---------------------------------

// 1 - SCHEMA
const fanClubSchema = mongoose.Schema(
    {
        isActive: {type:String},
        expirationDate: {type:String},
        creditCardNumber:{type:String},
        creditCardExpirationDate:{type:String},
        creditCardCvv:{type:String},
        creditCardOwner:{type:String}
    },
    {timestamps:true}
);

// 2 - MODELO Movie
const FanClub = mongoose.model('fan-club',fanClubSchema);

//---------------------------------OUTPUT---------------------------------
module.exports = FanClub;


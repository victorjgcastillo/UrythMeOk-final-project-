const mongoose = require('mongoose');
//---------------------------------INPUT---------------------------------

// 1 - SCHEMA
const ticketSchema = mongoose.Schema(
    {
        userId:{type:mongoose.Schema.Types.ObjectId, ref: 'user'},
        concertId: {type:mongoose.Schema.Types.ObjectId, ref: 'concert'},
        numTickets: {type:Number},
        name: {type:String},
        email:{type:String},
        postalCode:{type:String},
        creditCardNumber:{type:String},
        creditCardExpirationDate:{type:String},
        creditCardCvv:{type:String},
        creditCardOwner:{type:String},
        qr:{type:String}
    },
    {timestamps:true}
);

// 2 - MODELO Movie
const Ticket = mongoose.model('ticket',ticketSchema);

//---------------------------------OUTPUT---------------------------------
module.exports = Ticket;


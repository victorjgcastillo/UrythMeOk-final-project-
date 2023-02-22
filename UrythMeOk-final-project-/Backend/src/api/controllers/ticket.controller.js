const Ticket = require('../models/ticket.model');
const bcrypt = require('bcrypt');

//---------------------------------INPUT---------------------------------

const getTicketById = async(req, res) => {
    try {
        const {id} = req.params;
        const ticket = await Ticket.findById(id);
        return res.status(200).json(ticket);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postTicket = async (req,res) => {
    try {
        const {
            userId,
            concertId,
            numberOfTickets,
            name,
            email,
            postalCode,
            creditCardNumber,
            creditCardExpirationDate,
            creditCardCvv,
            creditCardOwner
        } = req.body;

        const newTicket = new Ticket({
            userId:userId,
            concertId:concertId,
            numTickets: numberOfTickets,
            name: name,
            email:email,
            postalCode:postalCode,
            creditCardNumber:creditCardNumber,
            creditCardExpirationDate:creditCardExpirationDate,
            creditCardCvv:creditCardCvv,
            creditCardOwner:creditCardOwner,
            qr:""
        });
        //Encrypt Sensible data
        newTicket.creditCardNumber = bcrypt.hashSync(newTicket.creditCardNumber, 10);
        newTicket.creditCardExpirationDate = bcrypt.hashSync(newTicket.creditCardExpirationDate, 10);
        newTicket.creditCardCvv = bcrypt.hashSync(newTicket.creditCardCvv, 10);
        newTicket.creditCardOwner = bcrypt.hashSync(newTicket.creditCardOwner, 10);
        //Save into DB    
        const inserted = await newTicket.save();
        res.status(201).json(inserted);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getTickets = async(req, res) => {
    try {        
        const allTickets = await Tickets.find();
        res.status(200).json(allTickets);
    } catch (error) {
        return res.status(500).json(error);
    }
};

//---------------------------------OUTPUT---------------------------------
module.exports = {
    getTickets,
    getTicketById,
    postTicket
}

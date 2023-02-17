const Concert = require('../models/concert.model');
const bcrypt = require('bcrypt');

//---------------------------------INPUT---------------------------------

const getConcerts = async(req, res) => {
    try {        
        const allConcerts = await Concert.find();// PREGUNTAR POR POPULATE
        res.status(200).json(allConcerts);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getConcertById = async(req, res) => {
    try {
        const {id} = req.params;
        const concert = await Concert.findById(id);
        return res.status(200).json(concert);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const addTicketConcert = async(req, res) => {
    try {
        const {id} = req.params;
        const {ticketId} = req.body;
        const myConcert = await Concert.findById(id);
        if(!myConcert.tickets){
            myConcert.tickets = [];
        }
        myConcert.tickets.push(ticketId);
        const updatedConcert = await Concert.findByIdAndUpdate(id, myConcert, {new: true});
        return res.status(200).json(updatedConcert);
    } catch (error) {
        return res.status(500).json(error);
    }
}


//---------------------------------OUTPUT---------------------------------
module.exports = {
    getConcerts,
    getConcertById,
    addTicketConcert
}

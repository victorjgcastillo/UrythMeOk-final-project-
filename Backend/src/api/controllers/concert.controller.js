const Concert = require('../models/concert.model');
const bcrypt = require('bcrypt');

//---------------------------------INPUT---------------------------------

const getConcerts = async(req, res) => {
    try {        
        const allConcerts = await Concert.find()
        .populate({path:'hall', model:'hall'})
        .populate({path:'artists', model:'artist', populate:{path:'genres', model:'genre'}})
        .populate({path:'tickets', model:'ticket'})
        .populate({path:'artists.genres', model:'genre'});

        res.status(200).json(allConcerts);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getConcertById = async(req, res) => {
    try {
        const {id} = req.params;
        const concert = await Concert.findById(id)
        .populate({path:'hall', model:'hall'})
        .populate({path:'artists', model:'artist', populate:{path: 'genres', model:'genre'}})
        .populate({path:'tickets', model:'ticket'});

        return res.status(200).json(concert);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const addTicketConcert = async(req, res) => {
    try {
        const {concertId, ticketId} = req.body;
        const myConcert = await Concert.findById(concertId);
        if(!myConcert.tickets){
            myConcert.tickets = [];
        }
        myConcert.tickets.push(ticketId);
        const updatedConcert = await Concert.findByIdAndUpdate(concertId, myConcert, {new: true});
        return res.status(200).json(updatedConcert);
    } catch (error) {
        return res.status(500).json(error);
    }
}

// -----------------------------------------------------------

const postConcert = async (req,res) => {
    try {
        const concert = req.body;
        const inserted = await Concert.insertMany(concert);
        res.status(201).json(inserted);
    } catch (error) {
        return res.status(500).json(error);
    }
};

//---------------------------------OUTPUT---------------------------------
module.exports = {
    getConcerts,
    getConcertById,
    addTicketConcert,
    postConcert
}

const Artist = require('../models/artist.model');
//---------------------------------INPUT---------------------------------

const getArtists = async(req, res) => {
    try {        
        const allArtist = await Artist.find().populate({path:'genres',model:'genre'});
        res.status(200).json(allArtist);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getArtistById = async(req, res) => {
    try {
        const {id} = req.params;
        const myArtist = await Artist.findById(id).populate({path:'genres',model:'genre'});
        return res.status(200).json(myArtist)
    } catch (error) {
        return res.status(500).json(error);
    }
};

//----------------------------------------------------------------------

const postArtist = async (req,res) => {
    try {
        const artists = req.body;
        const inserted = await Artist.insertMany(artists);
        res.status(201).json(inserted);
    } catch (error) {
        return res.status(500).json(error);
    }
};

//---------------------------------OUTPUT---------------------------------
module.exports = {
    getArtists,
    getArtistById,
    postArtist
}

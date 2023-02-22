const Genre = require('../models/genre.model');
//---------------------------------INPUT---------------------------------

const getGenre = async(req, res) => {
    try {        
        const allGenre = await Genre.find();
        res.status(200).json(allGenre);
        
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getGenreById = async(req, res) => {
    try {
        const {id} = req.params;
        const myGenre = await Genre.findById(id);
        return res.status(200).json(myGenre)
    } catch (error) {
        return res.status(500).json(error);
    }
}
    const postGenre = async (req,res) => {
        try {
            const genres = req.body;
            const inserted = await Genre.insertMany(genres);
            res.status(201).json(inserted);
        } catch (error) {
            return res.status(500).json(error);
        }
};

//---------------------------------OUTPUT---------------------------------
module.exports = {
    getGenre,
    getGenreById,
    postGenre
}

const Hall = require('../models/hall.model');
//---------------------------------INPUT---------------------------------

const getHalls = async(req, res) => {
    try {        
        const allHalls = await Hall.find();
        res.status(200).json(allHalls);
        
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getHallById = async(req, res) => {
    try {
        const {id} = req.params;
        const myHall = await Hall.findById(id);
        return res.status(200).json(myHall)
    } catch (error) {
        return res.status(500).json(error);
    }
};

// -----------------------------------------------------------

const postHalls = async (req,res) => {
    try {
        const halls = req.body;
        const inserted = await Hall.insertMany(halls);
        res.status(201).json(inserted);
    } catch (error) {
        return res.status(500).json(error);
    }
};

//---------------------------------OUTPUT---------------------------------
module.exports = {
    getHalls,
    getHallById,
    postHalls
}

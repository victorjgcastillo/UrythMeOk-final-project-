const FanClub = require('../models/fanClub.model');
const bcrypt = require('bcrypt');

//---------------------------------INPUT---------------------------------

const getFanClub = async(req, res) => {
    try {        
        const allFanClub = await FanClub.find();
        res.status(200).json(allFanClub);
        
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getFanClubById = async(req, res) => {
    try {
        const {id} = req.params;
        const myClubInfo = await FanClub.findById(id);
        return res.status(200).json(myClubInfo);
    } catch (error) {
        return res.status(500).json(error);
    }

};

const postFanClub = async (req,res) => {
    try {
        const {number,expirationDate,cvv,owner} = req.body;

        const newfanClubInfo = new FanClub({
            isActive:true,
            expirationDate:'16/02/2024',
            creditCardNumber:number,
            creditCardExpirationDate:expirationDate,
            creditCardCvv:cvv,
            creditCardOwner:owner
        });
        //Encrypt Sensible data
        newfanClubInfo.creditCardNumber = bcrypt.hashSync(newfanClubInfo.creditCardNumber, 10);
        newfanClubInfo.creditCardExpirationDate = bcrypt.hashSync(newfanClubInfo.creditCardExpirationDate, 10);
        newfanClubInfo.creditCardCvv = bcrypt.hashSync(newfanClubInfo.creditCardCvv, 10);
        newfanClubInfo.creditCardOwner = bcrypt.hashSync(newfanClubInfo.creditCardOwner, 10);
        //Save into DB    
        const inserted = await newfanClubInfo.save();
        res.status(201).json(inserted);
    } catch (error) {
        return res.status(500).json(error);
    }
};


//---------------------------------OUTPUT---------------------------------
module.exports = {
    getFanClub,
    getFanClubById,
    postFanClub
}

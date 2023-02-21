const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const {validationEmail, validationPassword} = require('../../validators/validation');
const {generateSign} = require('../../jwt/jwt');

//---------------------------------INPUT---------------------------------

const register = async(req, res, next) => {
    try {
        const newUser = new User(req.body);
        if(!validationEmail(newUser.email)){
            res.status(400).send({code:400, message:'Invalid Email'})
            return next();
        }
        //Check if email not repeated
        const users = await User.find({email:newUser.email})
        if(users.length > 0){
            res.status(400).send({code:400, message:'Duplicated Email'})
            return next();
        }
        newUser.password = bcrypt.hashSync(newUser.password, 10);   //Encriptamos nuestra contraseña para que no nos la puedan robar
        const createdUser = await newUser.save();
        return res.status(200).json(createdUser);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const login = async(req, res, next) => {
    // console.log(req.body);
    try {
        const myUser = await User.findOne({email: req.body.email});
        // console.log(myUser);
        if (myUser === null){
            res.status(400).send({code:400, message:'Not registered email'})
            return next()
        } else if (bcrypt.compareSync(req.body.password, myUser.password)){
            const token = generateSign(myUser._id, myUser.email)
            return res.status(200).json({myUser, token});
        } else {
            res.status(400).send({code:400, message:'Password Error'})
            return next()
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

const addTicket = async(req, res) => {
    try {
        const {userId,ticketId} = req.body;
        const myUser = await User.findById(userId);
        if(!myUser.tickets){
            myUser.tickets = [];
        }
        myUser.tickets.push(ticketId);
        const updatedUser = await User.findByIdAndUpdate(userId, myUser, {new: true});
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const addConcertDesired = async(req, res) => {
    try {
        const {userId,concertId} = req.body;
        const myUser = await User.findById(userId);
        if(!myUser.desiredConcerts){
            myUser.desiredConcerts = [];
        }
        myUser.desiredConcerts.push(concertId);
        const updatedUser = await User.findByIdAndUpdate(userId, myUser, {new: true});
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const addVip = async(req, res) => {
    try {
        const {userId,fanClubId} = req.body;
        const myUser = await User.findById(userId);
        myUser.idFanClub = fanClubId;
        const updatedUser = await User.findByIdAndUpdate(userId, myUser, {new: true});
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getUsers = async(req, res) => {
    try {        
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {
        return res.status(500).json(error);
    }
};


const getUserById = async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id)
        .populate({path:'tickets', model:'ticket'});
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }
};

//---------------------------------OUTPUT---------------------------------

module.exports = {
    register, 
    login, 
    addTicket,
    addConcertDesired,
    addVip,
    getUsers,
    getUserById
}
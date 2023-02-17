const express = require('express');
const {
    getArtist,
    getArtistById,
    postArtist
    // postRestaurant,
    // postRestaurants,
    // putRestaurant,
    // deleteRestaurant,
} = require('../controllers/artist.controllers');

const {isAuth} = require('../middleware/auth');
//---------------------------------INPUT---------------------------------
const router = express.Router();

//metodos GET
router.get('/', getArtist);
router.get('/:id', getArtistById);
router.post('/',postArtist );
 
//---------------------------------OUTPUT---------------------------------
module.exports = router;

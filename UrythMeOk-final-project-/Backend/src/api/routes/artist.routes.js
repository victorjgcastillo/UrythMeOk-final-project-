const express = require('express');
const {
    getArtists,
    getArtistById,
    postArtist
} = require('../controllers/artist.controllers');

const {isAuth} = require('../middleware/auth');
//---------------------------------INPUT---------------------------------
const router = express.Router();

//metodos GET
router.get('/', getArtists);
router.get('/:id', getArtistById);
router.post('/',postArtist );
 
//---------------------------------OUTPUT---------------------------------
module.exports = router;

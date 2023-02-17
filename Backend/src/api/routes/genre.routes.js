const express = require('express');
const {
    getGenre,
    getGenreById,
    postGenre,
    // postRestaurant,
    // postRestaurants,
    // putRestaurant,
    // deleteRestaurant,
} = require('../controllers/genre.controller');

const {isAuth} = require('../middleware/auth');
//---------------------------------INPUT---------------------------------
const router = express.Router();

//metodos GET
router.get('/', getGenre);
router.get('/:id',  getGenreById);
router.post('/',postGenre );
//---------------------------------OUTPUT---------------------------------
module.exports = router;
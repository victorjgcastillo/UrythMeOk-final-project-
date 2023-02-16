const express = require('express');
const {
    getHalls,
    getHallById
    // postRestaurant,
    // postRestaurants,
    // putRestaurant,
    // deleteRestaurant,
} = require('../controllers/halls.controllers');

const {isAuth} = require('../middleware/auth');
//---------------------------------INPUT---------------------------------
const router = express.Router();

//metodos GET
router.get('/', getHalls);
router.get('/:id', getHallById);

//---------------------------------OUTPUT---------------------------------
module.exports = router;



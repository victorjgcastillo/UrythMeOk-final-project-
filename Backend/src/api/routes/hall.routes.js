const express = require('express');
const {
    getHalls,
    getHallById,
    postHalls
} = require('../controllers/hall.controllers');

const {isAuth} = require('../middleware/auth');
//---------------------------------INPUT---------------------------------
const router = express.Router();

// Frontend methods
router.get('/', getHalls);
router.get('/:id', getHallById);

// Config methods
router.post('/', postHalls);

//---------------------------------OUTPUT---------------------------------
module.exports = router;



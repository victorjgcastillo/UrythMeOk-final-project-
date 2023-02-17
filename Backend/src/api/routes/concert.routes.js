const express = require('express');
const {
    getConcerts,
    getConcertById,
    addTicketConcert
} = require('../controllers/concert.controller');

const {isAuth} = require('../middleware/auth');
//---------------------------------INPUT---------------------------------
const router = express.Router();

router.get('/', getConcerts);
router.get('/:id', getConcertById);
router.put('/add-ticket/:id', addTicketConcert);

//---------------------------------OUTPUT---------------------------------
module.exports = router;



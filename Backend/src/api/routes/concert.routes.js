const express = require('express');
const {
    getConcerts,
    getConcertById,
    addTicketConcert,
    postConcert
} = require('../controllers/concert.controller');

const {isAuth} = require('../middleware/auth');
//---------------------------------INPUT---------------------------------
const router = express.Router();

router.get('/', getConcerts);
router.get('/:id', getConcertById);
router.post('/', postConcert);
router.put('/add-ticket', addTicketConcert);

//---------------------------------OUTPUT---------------------------------
module.exports = router;



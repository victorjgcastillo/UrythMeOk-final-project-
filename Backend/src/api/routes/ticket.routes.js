const express = require('express');
const {
    getTickets,
    getTicketById,
    postTicket
} = require('../controllers/ticket.controller');

const {isAuth} = require('../middleware/auth');
//---------------------------------INPUT---------------------------------
const router = express.Router();

//metodos GET
router.get('/', getTickets);
router.get('/:id', getTicketById);
router.post('/', postTicket);

//---------------------------------OUTPUT---------------------------------
module.exports = router;



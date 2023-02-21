const express = require('express');
const {
    register, 
    login,
    addTicket,
    addConcertDesired,
    addVip,
    getUsers,
    getUserById
} = require('../controllers/user.controller');

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);

router.post('/register', register);
router.post('/login', login);

router.put('/add-desired-concert', addConcertDesired);
router.put('/add-ticket', addTicket);
router.put('/add-vip', addVip);

module.exports = router;
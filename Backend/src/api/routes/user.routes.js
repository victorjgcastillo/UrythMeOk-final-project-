const express = require('express');
const {
    register, 
    login,
    addConcert,
    addConcertDesired,
    addVip,
    getUsers
} = require('../controllers/user.controller');

const router = express.Router();

router.get('/', getUsers)

router.post('/register', register);
router.post('/login', login);

router.put('/add-desired-concert', addConcertDesired);
router.put('/add-concert', addConcert);
router.put('/add-vip', addVip);

module.exports = router;
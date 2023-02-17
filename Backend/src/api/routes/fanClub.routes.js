const express = require('express');
const {
    getFanClub,
    getFanClubById,
    postFanClub
} = require('../controllers/fanClub.controller');

const {isAuth} = require('../middleware/auth');
//---------------------------------INPUT---------------------------------
const router = express.Router();

router.get('/users', getFanClub);
router.get('/user/:id', getFanClubById);
router.post('/user', postFanClub);

//---------------------------------OUTPUT---------------------------------
module.exports = router;



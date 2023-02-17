const express = require('express');
const {
    getFanClub,
    postFanClub
} = require('../controllers/fanClub.controller');

const {isAuth} = require('../middleware/auth');
//---------------------------------INPUT---------------------------------
const router = express.Router();

router.get('/user/:id', getFanClub);
router.post('/user', postFanClub);

//---------------------------------OUTPUT---------------------------------
module.exports = router;



const Promise = require('bluebird');
const Restaurant = require('../models/Restaurant');
const Activity = require('../models/Activity');
const Hotel = require('../models/Hotel');
const router = require('express').Router();
const api = require('./api')

router.use('/api', api);

// router.get('/options', function(req, res, next){
//     Promise.all([
//         Hotel.findAll({ include: [{ all: true }] }),
//         Restaurant.findAll(),
//         Activity.findAll()
//     ])
//         .spread((hotels, restaurants, activities) => res.json())
// })

module.exports = router;
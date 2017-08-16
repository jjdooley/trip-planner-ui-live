const router = require('express').Router();
const models = require('../../models');

var allAttractions = {};

router.get('/attractions', function(req, res, next){
    Promise.all([
        models.Hotel.findAll({include: [{all: true}]}),
        models.Restaurant.findAll({include: [{all: true}]}),
        models.Activity.findAll({include: [{all: true}]})
    ])
        .then(([hotels, restaurants, activities]) => {
            allAttractions.hotels = hotels;
            allAttractions.restaurants = restaurants;
            allAttractions.activities = activities;
            res.json(allAttractions)
        })
});

router.get('/hotels/:id', function(req, res, next){
    models.Hotels.findOne({where: {id: req.params.id}})
    .then(data => res.json(data))
})

module.exports = router;
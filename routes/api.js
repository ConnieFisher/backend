const express = require('express');
const router = express.Router();
const Present = require('./../models/presentModel');

router.get('/gift', (req, res, next) => {
    Present.find(function (err, present) {
        return res.json(present);
    });
});

router.get('/gift/:id', (req, res, next) => {
    Present.findById({
        _id: req.params.id
    }, req.body).then(function (present) {
        res.send(present);
    });
});

router.post('/gift', (req, res, next) => {
    // var present = new Present(req.body);
    // present.save();

    // short for the two lines above
    Present.create(req.body).then(function (present) {
        res.send(present);
    }).catch(next);

});

router.put('/gift/:id', (req, res, next) => {
    Present.findByIdAndUpdate({
        _id: req.params.id
    }, req.body).then(function (present) {
        res.send(present);
    });
});

router.delete('/gift/:id', (req, res, next) => {
    Present.findByIdAndRemove({
        _id: req.params.id
    }).then(function (present) {
        res.send(present);
    });
});
module.exports = router;
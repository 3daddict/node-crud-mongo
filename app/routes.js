//express router
const express = require('express'),
    router = express.Router(),
    mainController = require('./controllers/main.controllers'),
    eventController = require('./controllers/events.controller');

//export router
module.exports = router;

//define routes
//main routes
router.get('/', mainController.showHome);

//event routes
router.get('/events', eventController.showEvents);
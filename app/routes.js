//express router
const express = require('express'),
    router = express.Router(),
    mainController = require('./controllers/main.controllers');

//export router
module.exports = router;

//define routes
router.get('/', mainController.showHome);
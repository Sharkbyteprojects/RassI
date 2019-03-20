const express = require('express');
const routers = express.Router();
const model = require('../controls/model');


routers.get('/', (request, response) => {
    response.send(model.getAll());
});
module.exports = routers;
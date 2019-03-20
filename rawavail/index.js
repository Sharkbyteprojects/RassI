const express = require('express');
const routers = express.Router();

const gpios = [
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 17},
    {id: 27},
    {id: 22},
    {id: 5},
    {id: 6},
    {id: 13},
    {id: 19},
    {id: 26}
];

routers.get('/', (request, response) => {
    response.send(gpios);
});
module.exports = routers;
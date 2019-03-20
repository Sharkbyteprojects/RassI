const model = require('./model');
const render = require('./html');
const rpi = require('./rpi');
function listAction(request, response){
    const gpi = model.getAll();
    const body = render(gpi);
    response.send(body);
}

function onoff(request, response){
    const id = parseInt(request.params.id, 10);
    rpi.service(id);
    response.redirect(request.baseUrl);
}
module.exports = {
    listAction,
    onoff,
};
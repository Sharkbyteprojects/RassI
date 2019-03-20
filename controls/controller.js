const model = require('./model');
const render = require('./html');

function listAction(request, response){
    const gpi = model.getAll();
    const body = render(gpi);
    response.send(body);
}


module.exports = {
    listAction,
    onoff,
};

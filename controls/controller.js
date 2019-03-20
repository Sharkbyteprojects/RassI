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
function listAction(request, response){
    response.send(gpios);
}
module.exports = {
    listAction,
};
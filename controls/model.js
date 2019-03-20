const gpios = [
    {id: 2, active: false},
    {id: 3, active: false},
    {id: 4, active: false},
    {id: 17, active: false},
    {id: 27, active: false},
    {id: 22, active: false},
    {id: 5, active: false},
    {id: 6, active: false},
    {id: 13, active: false},
    {id: 19, active: false},
    {id: 26, active: false}
];
module.exports = {
    getAll(){
        return gpios;
    },
};
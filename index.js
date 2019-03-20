const express = require('express');
const routingcontrol = require('./controls')
const app = express();
const morgan = require('morgan');
const rawdate = require('./rawavail');

app.use(morgan('common', { immediate: true }));
app.get('/', (request, response) => response.redirect('/gpio'));
app.use('/gpio', routingcontrol);
app.use('/gpio/raw', rawdate);
app.listen(80, () => {
    console.log("Server Listen on localhost Port 80");
});
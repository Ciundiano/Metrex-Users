const express = require('express');
const app = express.Router();



app.get('/users', (req, res) => res.send('Desde users'));


app.post('/user', (req, res) => res.send('user POST'));


module.exports = app 
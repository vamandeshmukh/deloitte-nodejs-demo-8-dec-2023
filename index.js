
console.log('start');

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log('welcome');
    res.send('Welcome to Deloitte NodeJS demo application.');
})

app.listen(() => {
    console.log(`App is running at http://localhost:${port}/`);
}, port);


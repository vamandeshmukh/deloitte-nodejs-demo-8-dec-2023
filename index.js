console.log('start');

import express from 'express';
import { getData, aontherFun } from './data-source.js';

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}/`);
});+-
app.get('/', (req, res) => {
    console.log('welcome');
    // res.send('Welcome to Deloitte NodeJS demo application.');
    const data = getData();
    res.send(data.info);
});

app.get('/about', (req, res) => {
    console.log('about');
    res.send('About Deloitte');
});

app.get('/contact', (req, res) => {
    console.log('contact');
    res.send('Please contact us for your needs.');
});



// // steps
// // create a folder with the project name
// // on cmd, run -
// // npm init -y
// // edit package.json
// // write code in index.js
// //74






// -++}
// 0+
// +                    on cmd, run -
// // // npm install
// // on cmd, run -
// // npm start
// // view the output on the browser
// // to stop, on cmd, run
// // Ctrl + C Y

// console.log('start');

// // add -   "type": "module" in package.json
// import express from 'express';
// // const express = require('express');
// const app = express();
// const port = 3000;

// // app.listen(arg1, arg2);
// // app.listen(port number, () => {}));

// app.listen(port, () => {
//     console.log(`App is running at http://localhost:${port}/`);
// });

// // app.get(arg1, arg2);
// // app.get('endpoint', () => {});
// // app.get('endpoint', (request, response) => {});
// // app.get('endpoint', (request, response) => {response.send()});

// app.get('/', (req, res) => {
//     console.log('welcome');
//     res.send('Welcome to Deloitte NodeJS demo application.');
// });

// app.get('/about', (req, res) => {
//     console.log('about');
//     res.send('About Deloitte');
// });

// app.get('/contact', (req, res) => {
//     console.log('contact');
//     res.send('Please contact us for your needs.');
// });


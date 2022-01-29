import express from 'express';
// import { Server } from 'node:http';
import bodyParser from 'body-parser';
// import { dirname } from 'node:path';
import path from 'path';


// console.log(path.resolve());

const app = express();

app.use(express.static(path.resolve() + "/public"));

app.listen(3000);



// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.get('/:id', (req, res) => {

//     console.log(req.params);
//     res.status(404).send("not found");
// });

// // app.get('/profile', (req, res) => {
// //     res.send('getting profile');
// // });

// // app.post('/profile', (req, res) => {
// //     console.log(req.body);
// //     res.send("success");
// // });


// import { createServer } from "http";

// const server = createServer((request, response) => {
//     // console.log(request.headers);
//     console.log('method', request.mehtod);
//     console.log('url', request.url);
//     const user = {
//         name: 'John',
//         hobby: 'Skating'
//     }
//     response.setHeader('Content-Type', 'application/json');
//     response.end(JSON.stringify(user));
// });

// server.listen(3001);
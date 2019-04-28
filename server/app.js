const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const cors = require('cors');
const responseTime = require('response-time');

const hostname = 'localhost';
const port = process.env.port || 3035;

// Mock data
const routes = require('./routes');

// Middleware
server.use(cors());
server.options('*', cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Adds X-Response-Time header to responses
server.use(responseTime());
server.use('/api/products', routes.products);
server.get('/', (req, res) => res.send('Welcome to the Products API!'));

server.listen(port, () => console.log(`[Server running on ${hostname}:${port}]`));

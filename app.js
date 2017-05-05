import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import http from 'http';
import routes from './server/routes';

// set up the express app

const app = express();

//log request to console

app.use(logger('dev'));

//parse incoming request data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', routes.bRouter);

//set up a default catch-all route that sends back a welcome message in JSON format

app.get('*', (req, res) => res.status(200).json({
  message:'Welcome to progress'
}));

const port = parseInt(process.env.PORT, 10) || 4000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
console.log('app running on port: ', port);

module.exports = app;
const express = require('express'),
      server = express(),
      resolve = require('path').resolve,
      morgan = require('morgan'),
      bodyParser = require('body-parser');

server.use([
  express.static(resolve(__dirname, '..', 'dist')),
  morgan('dev'),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false })
]);

server.use('/api', require('./api'));
server.get('/*', (req, res) => res.sendFile(resolve(__dirname, '..', 'dist', 'index.html')));

server.use((err, req, res, next) => {
  if(err) res.send(err.message);
});

server.listen(3000, console.log('You made it to 3000'));
var express    = require('express'),
    port       = process.env.PORT || 8080,
    logger     = require('morgan'),
    bodyParser = require('body-parser');

var app = express();

// Mount Middleware //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended : true } ));
app.use(express.static(__dirname + '/public'));

// Routes //
app.get('/', function(req, res) {
  res.sendFile('index.html', { root : './public/html' });
});

app.get('/success', function(req, res) {
  res.sendFile('success.html', { root : './public/html' });
});

app.post('/formsubmit', function(req, res) {
  console.log(`Posted ${req.params} to the database`);
  res.redirect('/success');
});

// Listener //
app.listen(port, function() {
  console.log(`Ported to ${port}; server up and running`);
});

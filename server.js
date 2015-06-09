/**
 * Created by arelati on 09/06/2015.
 */

var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

var secret = 'EngWorkShop';

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

// Funzioni per la creazione del TOKEN

var createToken = function(username) {
    return jwt.sign({ username: username }, secret);
};

var decodeToken = function(token){
    return jwt.verify(token, secret);
};

app.post('/api/Authentication', function(req, res, next){

    console.log(req);

    // Controlli validazione utente se OK

    var result =  {
        username: req.body.username,
        token: createToken({username: req.body.username}),
        loginRedirect: null
    };

    res.json(result);
    next();

});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port)

});
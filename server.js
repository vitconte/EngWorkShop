/**
 * Created by arelati on 09/06/2015.
 */

var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');

var secret = 'EngWorkShop';

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(cookieParser());
// Funzioni per la creazione del TOKEN

var createToken = function(username) {
    return jwt.sign({ username: username }, secret);
};

var decodeToken = function(token){
    return jwt.verify(token, secret);
};

app.post('/pub/Authentication', function(req, res, next){

    // Controlli validazione utente se OK

    var result =  {
        username: req.body.username,
        token: createToken({username: req.body.username}),
        loginRedirect: null
    };

    res.cookie('XSRF-TOKEN', "123456");
    res.json(result);
    next();

});

app.all('/api/*', function(req, res, next){

    console.log(req.headers);

    if(req.headers["authorization"] != 'null') {
        var decodedToken = decodeToken(req.headers["authorization"]);
        if(decodedToken) {
            req.userInfo = decodedToken;
            next();
            return;
        }
    }

    res.status(401);
    res.end('Authorization denied');
});

app.get('/api/checkAuth', function(req, res, next){
    console.log(req.userInfo);
    res.json({ result : true });
    next();
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port)

});
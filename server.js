const connect = require('connect');
const app = connect();

function helloWorldPlain(req, res){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
};

function helloWorldHTML(req, res){
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hellow from NodeJS Application as html</h1>');
}

function helloWorldJSON(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.end('{"Message":"Hello from NodeJS Application as json"}');
}

app.use('/html', helloWorldHTML);
app.use('/json', helloWorldJSON);
app.use('/', helloWorldPlain);

app.listen(3000);
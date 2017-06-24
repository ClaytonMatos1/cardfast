var app = require('./config/custom-express')();
var port = 3001;

app.listen(port, function () {
    console.log('Servidor rodando na porta:', port);
});
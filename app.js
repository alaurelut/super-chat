var app = {};
app.server = require('./server')();
app.server.create();

app.socket = require('./socket')(app);
app.socket.create();
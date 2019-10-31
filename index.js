let app = require('express')()
let http = require('http').createServer(app)
let PORT = process.env.PORT || 3001
let io = require('socket.io')(http)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

http.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
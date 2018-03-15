const
    express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

io.on('connection', (socket) => {
    console.log('A new client has connected...')
    io.emit('new-user-connection', {boom: "Banana!"})

    socket.on('new-message', (message) => {
        io.emit('broadcast-message', message)
    })

})

server.listen(3000, (err) => {
    console.log(err || "Server running on port 3000")
})
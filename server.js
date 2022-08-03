const express = require('express')
const socket = require('socket.io')

const app = express()
const server = app.listen(2929)


app.use(express.static('public'))

const io = socket(server)

io.on('connection', (socket) =>{
    console.log(socket.id)

    socket.on('chat', data => {
        io.sockets.emit('chat', data)
        console.log(data)
    })


    socket.on('typing', data => {
        socket.broadcast.emit('typing', data)
        //console.log(data)
    })
})


import { addShelf } from '../tabs/Shelves/shelvesSlice'

const io = require('socket.io-client')

let socket = null

export const connectToServer = () => {
    socket = io('ws://192.168.1.65:3000')

    socket.on('connect_error', () => {
        console.log("Could not connect to server")
    })
    
    socket.on('connect', () => {
        console.log("Socket connected to server.")
    })

    socket.on('disconnect', () => {
        console.log("Socket disconnected.")
    })

    socket.on('queryResponse', (response) => {

        if(response.error)
            console.log("Error: " + response.data)
        else {
            response.data.forEach(e => {
                console.log(e.volumeInfo.title)
            })
        }
    })
}

export const sendBookQuery = query => {
    if(socket) {
        console.log("Sending query")
        socket.emit('query', query)
    }
    else {
        console.log("Socket not connected")
    }
}
import { setBooks } from '../state/booksSlice'
import { setShelves } from '../state/shelvesSlice'
import { setCurrentUser } from '../state/userSlice'

const io = require('socket.io-client')
import store from '../state/store'

let socket = null

export const connectToServer = () => {

    socket = io('ws://192.168.1.65:3000')

    setListeners()

}

const setListeners = () => {

    socket.on('connect_error', (error) => {

        console.log("Could not connect to server: " + error)

    })
    
    socket.on('connect', () => {

        console.log("Socket connected to server.")

    })

    socket.on('disconnect', () => {

        console.log("Socket disconnected.")

    })
}
 
export const sendVolumeQuery = async (query) => {

    return new Promise((resolve, reject) => {

        if(socket) {

            console.log("Sending query")

            socket.on('google_books_by_title_response', (response) => {

                resolve(response)

            })

            socket.on('google_books_by_title_error', error => {

                reject(error)

            })

            socket.emit('search_google_books_by_title', query)
        }
        else {

            reject("Socket not connected")

        }
    })
}

export const registerNewUser = async(user) => {
    
    return new Promise((resolve, reject) => {
        
        if(socket) {

            console.log("Registering user.")

            socket.on('register_new_user_response', response => {

                resolve(response)

            })

            socket.on('register_new_user_error', error => {

                reject(error)

            })

            socket.emit('register_new_user', user)

        }
        else {

            reject("Socket not connected")

        }
    })
}

export const loginAsUser = async (user) => {

    return new Promise((resolve, reject) => {
        
        if (socket) {

            console.log("Logging in as " + user.username)

            socket.on('login_as_user_response', userData => {
                
                const { user, shelves, books } = userData

                store.dispatch(setCurrentUser(user))

                store.dispatch(setShelves(shelves))

                store.dispatch(setBooks(books))

                resolve("Looged in as " + user.name)
            })

            socket.on('login_as_user_error', error => {

                reject(console.error(error))

            })

            socket.emit('login_as_user', user)

        }
      else {

            return reject( "Socket not connected")

        }
    })

}

export const postShelf = async (shelf) => {
    
}
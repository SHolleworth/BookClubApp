import { setBooks } from '../state/booksSlice'
import { setShelves } from '../state/shelvesSlice'
import { setCurrentUser } from '../state/userSlice'

const io = require('socket.io-client')
import store from '../state/store'
import { Socket } from 'socket.io-client'

let socket: Socket | null = null

export const connectToServer = () => {

    socket = io('ws://192.168.1.65:3000')

    setListeners()

}

const setListeners = () => {

    if(socket) {
        socket.on('connect_error', (error: Error) => {

            console.log("Could not connect to server: " + error)

        })
        
        socket.on('connect', () => {

            console.log("Socket connected to server.")

        })

        socket.on('disconnect', () => {

            console.log("Socket disconnected.")

        })
    }
}
 
export const sendVolumeQuery = async (query: string) => {

    return new Promise((resolve, reject) => {

        if(socket) {

            console.log("Sending query")

            socket.on('google_books_by_title_response', (response: Object[]) => {

                resolve(response)

            })

            socket.on('google_books_by_title_error', (error: Error) => {

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

                store.dispatch(setBooks(books))

                store.dispatch(setCurrentUser(user))

                store.dispatch(setShelves(shelves))

                return resolve("Logged in as " + user.username)
            })

            socket.on('login_as_user_error', error => {

                return reject("Login as user Error " + error)

            })

            socket.emit('login_as_user', user)

        }
      else {

            return reject( "Socket not connected")

        }
    })

}

export const postNewShelf = async (shelf) => {

    return new Promise((resolve, reject) => {
        
        if (socket) {

            console.log("Posting Shelf: " + shelf.name)

            socket.on('post_new_shelf_response', response => {
                
                return resolve(response)

            })

            socket.on('post_new_shelf_error', error => {

                return reject(error)

            })

            socket.emit('post_new_shelf', shelf)

        }
      else {

            return reject( "Socket not connected")

        }
    })

}

export const retrieveShelves = async (user) => {

    return new Promise((resolve, reject) => {
        
        if (socket) {

            socket.on('retrieve_shelves_response', shelves => {

                store.dispatch(setShelves(shelves))

                console.log("Retrieved shelves.")

                return resolve()

            })

            socket.on('retrieve_shelves_error', error => {

                return reject("Error retrieving shelves: " + error)

            })


            socket.emit('retrieve_shelves', user)

        }
      else {

            return reject( "Socket not connected")

        }

    })
   
}

export const postNewBook = async (book) => {
    
    return new Promise((resolve, reject) => {
        
        if (socket) {

            console.log("Posting Book: " + book.info.title)

            socket.on('post_new_book_response', response => {
                
                return resolve(response)

            })

            socket.on('post_new_book_error', error => {

                return reject(error)

            })

            socket.emit('post_new_book', book)

        }
      else {

            return reject( "Socket not connected")

        }

    })
}

export const retrieveBooks = async (user) => {

    return new Promise((resolve, reject) => {
        
        if (socket) {

            socket.on('retrieve_books_response', data => {

                store.dispatch(setShelves(data.shelves))

                store.dispatch(setBooks(data.books))

                console.log("Retrieved books.")

                return resolve()

            })

            socket.on('retrieve_books_error', error => {

                return reject("Error retrieving books: " + error)

            })


            socket.emit('retrieve_books', user)

        }
      else {

            return reject( "Socket not connected")

        }

    })
   
}
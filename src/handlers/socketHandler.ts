import { setBooks } from '../state/booksSlice'
import { setShelves } from '../state/shelvesSlice'
import { setCurrentUser } from '../state/userSlice'

const io = require('socket.io-client')
import store from '../state/store'
import { Socket } from 'socket.io-client'
import { BookObject, ClubObject, ClubPostObject, ShelfObject, UserLoginDataObject, UserLoginObject, UserObject, UserRegisterObject } from '../../../types'
import { setClubs } from '../state/clubsSlice'

let socket: Socket | null = null

export const connectToServer = () => {

    socket = io('ws://192.168.1.65:3000')

    setListeners()

}

const setListeners = () => {

    if(socket) {
        socket.on('connect_error', (error: string) => {

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

            socket.on('google_books_by_title_error', (error: string) => {

                reject(error)

            })

            socket.emit('search_google_books_by_title', query)
        }
        else {

            reject("Socket not connected")

        }
    })
}

export const registerNewUser = async(user: UserRegisterObject) => {
    
    return new Promise((resolve, reject) => {
        
        if(socket) {

            console.log("Registering user.")

            socket.on('register_new_user_response', (response: string) => {

                resolve(response)

            })

            socket.on('register_new_user_error', (error: string) => {

                reject(error)

            })

            socket.emit('register_new_user', user)

        }
        else {

            reject("Socket not connected")

        }
    })
}

export const loginAsUser = async (user: UserLoginObject) => {

    return new Promise((resolve, reject) => {
        
        if (socket) {

            console.log("Logging in as " + user.username)

            socket.on('login_as_user_response', (userData: UserLoginDataObject) => {
                
                const { user, shelves, books } = userData

                store.dispatch(setBooks(books))

                store.dispatch(setCurrentUser(user))

                store.dispatch(setShelves(shelves))

                return resolve("Logged in as " + user.username)
            })

            socket.on('login_as_user_error', (error: string) => {

                return reject("Login as user Error " + error)

            })

            socket.emit('login_as_user', user)

        }
      else {

            return reject( "Socket not connected")

        }
    })

}

export const postNewShelf = async (shelf: ShelfObject) => {

    return new Promise((resolve, reject) => {
        
        if (socket) {

            console.log("Posting Shelf: " + shelf.name)

            socket.on('post_new_shelf_response', (response: string) => {
                
                return resolve(response)

            })

            socket.on('post_new_shelf_error', (error: string)=> {

                return reject(error)

            })

            socket.emit('post_new_shelf', shelf)

        }
      else {

            return reject( "Socket not connected")

        }
    })

}

export const retrieveShelves = async (user: UserObject) => {

    return new Promise((resolve, reject) => {
        
        if (socket) {

            socket.on('retrieve_shelves_response', (shelves: ShelfObject[]) => {

                store.dispatch(setShelves(shelves))

                console.log("Retrieved shelves.")

                return resolve("Retrieved shelves.")

            })

            socket.on('retrieve_shelves_error', (error: string) => {

                return reject("Error retrieving shelves: " + error)

            })


            socket.emit('retrieve_shelves', user)

        }
      else {

            return reject( "Socket not connected")

        }

    })
   
}

export const postNewBook = async (book: BookObject) => {
    
    return new Promise((resolve, reject) => {
        
        if (socket) {

            console.log("Posting Book: " + book.info.title)

            socket.on('post_new_book_response', (response: string) => {
                
                return resolve(response)

            })

            socket.on('post_new_book_error', (error: string) => {

                return reject(error)

            })

            socket.emit('post_new_book', book)

        }
      else {

            return reject( "Socket not connected")

        }

    })
}

export const retrieveBooks = async (user: UserObject) => {

    return new Promise((resolve, reject) => {
        
        if (socket) {

            socket.on('retrieve_books_response', (data: { shelves: ShelfObject[], books: BookObject[] }) => {

                store.dispatch(setShelves(data.shelves))

                store.dispatch(setBooks(data.books))

                console.log("Retrieved books.")

                return resolve("Retrieved books.")

            })

            socket.on('retrieve_books_error', (error: string) => {

                return reject("Error retrieving books: " + error)

            })


            socket.emit('retrieve_books', user)

        }
      else {

            return reject( "Socket not connected")

        }

    })
   
}

export const postNewClub = async (club: ClubPostObject) => {
    
    return new Promise((resolve, reject) => {
        
        if (socket) {

            socket.on('post_new_club_response', (response: string) => {

                console.log(response)
                
                return resolve(response)

            })

            socket.on('post_new_club_error', (error: Error) => {

                return reject(error)

            })

            socket.emit('post_new_club', club)

        }
        else {

            return reject( "Socket not connected")

        }


    });

}

export const retrieveClubs = async (user: UserObject) => {
    
    return new Promise((resolve, reject) => {
        
        if (socket) {
            
            socket.on('retrieve_clubs_response', (clubs: ClubObject[]) => {
                
                store.dispatch(setClubs(clubs))

                return resolve("Successfully retrieved clubs.")

            })

            socket.on('retrieve_clubs_error', (error: string) => {
                
                return reject(error)

            })

            socket.emit('retrieve_clubs', user)

        }
        else {

            return reject("Socket not connected")

        }

    });

}
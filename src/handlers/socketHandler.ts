const io = require('socket.io-client')
import { Socket } from 'socket.io-client'
import store from '../state/store'
import { addInvite, setClubs, setInvites } from '../state/clubsSlice'
import { setBooks } from '../state/booksSlice'
import { setShelves } from '../state/shelvesSlice'
import { setCurrentUser } from '../state/userSlice'
import {
    AcceptClubInviteObject,
    BookObject,
    ClubInviteReceive,
    ClubObject,
    ClubPostObject,
    MeetingObject,
    ShelfObject,
    UserLoginDataObject,
    UserLoginObject,
    UserObject,
    UserRegisterObject
} from '../../../types'

let socket: Socket | null = null

export const connectToServer = async () => {

    return new Promise((resolve, reject) => {
            
        socket = io('ws://192.168.1.65:3000')

        setListeners(resolve, reject)

    });
}

const setListeners = (resolve: any, reject: any) => {

    if(socket) {

        socket.on('connect_error', (error: string) => {

            reject(error)

        })
        
        socket.on('connect', () => {

            const state = store.getState()

            const currentUserId = state.user.currentUser.id

            if(currentUserId)
            
                socket?.emit('update_socket_id', currentUserId)

            resolve("Socket connected to server.")

        })

        socket.on('disconnect', () => {

            console.log("Socket disconnected.")

        })

        socket.on('update_socket_id_response', (message: string) => {

            console.log(message)
            
        })

        socket.on('update_socket_id_error', (error: string) => {

            console.error(error)
            
        })

        socket.on('receiving_club_invite', (invite: ClubInviteReceive) => {

            console.log(`Received invitation to club ${invite.club.name} from user: ${invite.inviter.username}.`)

            store.dispatch(addInvite(invite))
            
        })

        socket.on('refresh_clubs', async () => {

            console.log("Received signal to refresh clubs.")

            const currentUser = store.getState().user.currentUser
    
            socket?.emit('retrieve_clubs', currentUser)

        })

        socket.on('retrieve_clubs_response', (clubs: ClubObject[]) => {
                
            store.dispatch(setClubs(clubs))

            console.log("Retrieved clubs")

            return resolve("Successfully retrieved clubs.")

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
                
                const { user, shelves, books, clubs, invites } = userData

                store.dispatch(setBooks(books))

                store.dispatch(setCurrentUser(user))

                store.dispatch(setShelves(shelves))

                store.dispatch(setClubs(clubs))

                store.dispatch(setInvites(invites))

                return resolve("Logged in as " + user.username)
                
            })

            socket.on('login_as_user_error', (error: string) => {

                return reject(error)

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

export const deleteShelf = async (shelf: ShelfObject) => {

    
    return new Promise((resolve, reject) => {
        
        if (socket) {

            console.log("Deleting Shelf: " + shelf.name)

            socket.on('delete_shelf_response', async (response: string) => {

                const currentUser = store.getState().user.currentUser
                
                await retrieveBooks(currentUser)

                return resolve(response)

            })

            socket.on('delete_shelf_error', (error: string)=> {

                return reject(error)

            })

            socket.emit('delete_shelf', shelf)

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

export const deleteBook = async (book:BookObject) => {

    return new Promise((resolve, reject) => {
        
        if (socket) {

            console.log("Deleting Book: " + book.info.title)

            socket.on('delete_book_response', async (response: string) => {

                const currentUser = store.getState().user.currentUser

                await retrieveBooks(currentUser)
                
                return resolve(response)

            })

            socket.on('delete_book_error', (error: string) => {

                return reject(error)

            })

            socket.emit('delete_book', book)

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

                console.log("Retrieved clubs")

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

export const sendClubInvite = async (invite: ClubObject) => {

    return new Promise((resolve, reject) => {
        
        if (socket) {
            
            socket.on('send_club_invite_response', (message: string) => {

                return resolve(message)

            })

            socket.on('send_club_invite_error', (error: string) => {
                
                return reject(error)

            })

            socket.emit('send_club_invite', invite)

        }
        else {

            return reject("Socket not connected")

        }

    });
    
}

export const postClubMember = async (payload: AcceptClubInviteObject) => {

    return new Promise((resolve, reject) => {
        
        if (socket) {
            
            socket.on('post_club_member_response', (message: string) => {

                return resolve(message)

            })

            socket.on('post_club_member_error', (error: string) => {
                
                return reject(error)

            })

            socket.emit('post_club_member', payload)

        }
        else {

            return reject("Socket not connected")

        }

    });
    
}


export const retrieveInvites = async (user: UserObject) => {
 
    return new Promise((resolve, reject) => {
        
        if (socket) {
            
            socket.on('retrieve_club_invites_response', (invites: ClubInviteReceive[]) => {

                store.dispatch(setInvites(invites))

                return resolve("Retrieved invites.")

            })

            socket.on('retrieve_club_invites_error', (error: string) => {
                
                return reject(error)

            })

            socket.emit('retrieve_club_invites', user)

        }
        else {

            return reject("Socket not connected")

        }

    });

}

export const deleteInvite = async (invite: ClubInviteReceive) => {

    return new Promise((resolve, reject) => {

        if (socket) {
            
            socket.on('delete_club_invite_response', (message: string) => {

                return resolve(message)

            })

            socket.on('delete_club_invite_error', (error: string) => {
                
                return reject(error)

            })

            socket.emit('delete_club_invite', invite)

        }
        else {

            return reject("Socket not connected")

        }
        
    });
    
}

export const postMeeting = (meeting: MeetingObject) => {

    return new Promise((resolve, reject) => {

        if (socket) {
            
            socket.on('post_meeting_response', (message: string) => {

                const user = store.getState().user.currentUser

                return resolve(message)

            })

            socket.on('post_meeting_error', (error: string) => {
                
                return reject(error)

            })
    
            socket.emit('post_meeting', meeting)
    
            }
            else {
    
                return reject("Socket not connected")
    
            }

    });
    
}

export const deleteMeeting = (meeting: MeetingObject) => {

    return new Promise((resolve, reject) => {

        if (socket) {
            
            socket.on('delete_meeting_response', async (message: string) => {

                const currentUser = store.getState().user.currentUser

                await retrieveClubs(currentUser)

                return resolve(message)

            })

            socket.on('delete_meeting_error', (error: string) => {
                
                return reject(error)

            })

            socket.emit('delete_meeting', meeting)

        }
        else {

            return reject("Socket not connected")

        }
        
    });
    
}
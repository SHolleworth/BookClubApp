import booksReducer, { addBook, setBooks } from "../../src/state/booksSlice"
import { BookInfoObject, BookObject } from "../../src/types"

const id = 0
const id2 = 1
const shelfId = 0
const volumeId = "1234"
const info: BookInfoObject = {
    id: 2,
    title: 'title',
    authors: ['author1, author2'],
    publisher: 'publisher',
    publishedDate: '01-01-01',
    description: 'description',
    mainCategory: 'mainCategory',
    thumbnail: 'www.thumbnail.com/images/thumbnail.png'
}

describe('reducer', () => {
    
    test('should append book to state', () => {

        const book1: BookObject = {id, shelfId, volumeId, info: {...info}}

        const book2: BookObject = {id: id2, shelfId, volumeId, info: {...info}}

        expect(booksReducer([book1], addBook(book2))).toEqual([book1, book2])

    })

    test('should replace state with new book', () => {
        
        const book1: BookObject = {id, shelfId, volumeId, info: {...info}}

        const book2: BookObject = {id: id2, shelfId, volumeId, info: {...info}}

        expect(booksReducer([book1], setBooks([book2]))).toEqual([book2])

    })

    test('setBooks() should handle single book object outside of array', () => {
        
        const book1: BookObject = {id, shelfId, volumeId, info: {...info}}

        const book2: BookObject = {id: id2, shelfId, volumeId, info: {...info}}

        expect(booksReducer([book1], setBooks(book2))).toEqual([book2])

    })

})

describe('actions', () => {

    test('should create an action to add a book', () => {
        const payload: BookObject = {id, shelfId, volumeId, info: {...info}}
        const expectedAction = {
            type: 'books/addBook',
            payload
        }
        expect(addBook(payload)).toEqual(expectedAction)
    })

    test('should create an action to set the book state', () => {
        const payload: BookObject = {id, shelfId, volumeId, info: {...info}}
        const expectedAction = {
            type: 'books/setBooks',
            payload: [payload]
        }
        expect(setBooks([payload])).toEqual(expectedAction)
    })

})
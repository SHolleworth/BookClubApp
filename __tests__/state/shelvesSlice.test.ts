
import shelvesReducer, { addShelf, setShelves } from "../../src/state/shelvesSlice"
import { ShelfObject } from "../../src/types"

const sid = 0
const sid2 = 1
const userId = 0
const name = 'name'

describe('reducer', () => {
    
    test('should append shelf to state', () => {

        const shelf1: ShelfObject = {id: sid, name, userId} 

        const shelf2: ShelfObject = {id: sid2, name, userId}

        const initialState = {
            shelves: [shelf1],
            status: 'idle',
            error: null
        }

        expect(shelvesReducer(initialState, addShelf(shelf2))).toEqual({...initialState, shelves: [shelf1, shelf2]})

    })

    test('should replace state with new shelf', () => {
        
        const shelf1: ShelfObject = {id: sid, name, userId} 

        const shelf2: ShelfObject = {id: sid2, name, userId}

        const initialState = {
            shelves: [shelf1],
            status: 'idle',
            error: null
        }

        expect(shelvesReducer(initialState, setShelves([shelf2]))).toEqual({...initialState, shelves: [shelf2]})

    })

    test('setShelves() should handle single shelf object outside of array', () => {
        
        const shelf1: ShelfObject = {id: sid, name, userId} 

        const shelf2: ShelfObject = {id: sid2, name, userId}

        const initialState = {
            shelves: [shelf1],
            status: 'idle',
            error: null
        }

        expect(shelvesReducer(initialState, setShelves(shelf2))).toEqual({...initialState, shelves: [shelf2]})

    })

})

describe('actions', () => {

    test('should create an action to add a shelf', () => {

        const payload: ShelfObject = {id: sid, name, userId} 

        const expectedAction = {
            type: 'shelves/addShelf',
            payload
        }
        expect(addShelf(payload)).toEqual(expectedAction)
    })

    test('should create an action to set the shelf state', () => {
        const payload: ShelfObject = {id: sid, name, userId} 

        const expectedAction = {
            type: 'shelves/setShelves',
            payload: [payload]
        }

        expect(setShelves([payload])).toEqual(expectedAction)
    })

})
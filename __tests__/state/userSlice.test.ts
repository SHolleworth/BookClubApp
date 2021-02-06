import userReducer, { setCurrentUser } from '../../src/state/userSlice'

const initialState = { currentUser: { id: 0, username: 'username' }}
const newUser = { id: 1, username: 'username' }

describe('reducer', () => {
    
    test('should update current user state', () => {
        
        expect(userReducer(initialState, setCurrentUser(newUser))).toEqual({ currentUser: newUser })

    })

})

describe('actions', () => {
    
    test('should create an action to set the current user', () => {
        
        const expectedAction = {
            type: 'user/setCurrentUser',
            payload: newUser
        }

        expect(setCurrentUser(newUser)).toEqual(expectedAction)

    })

})
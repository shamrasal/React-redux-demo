import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true }
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        decrease(state, action) {
            state.counter = state.counter - action.payload
        },
        toogle(state) {
            state.showCounter = !state.showCounter
        }
    }
})

const initialAuthState = { isAuthenticated: false }
const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }

    }
})


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        Auth: AuthSlice.reducer
    }
})
export const conunterActions = counterSlice.actions
export const authActions = AuthSlice.actions


export default store
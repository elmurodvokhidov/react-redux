import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    loggedIn: false,
    error: null,
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signStart: state => {
            state.isLoading = true
        },
        signSuccess: (state, action) => {
            state.loggedIn = true
            state.isLoading = false
            state.user = action.payload
        },
        signFail: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export const { signStart, signSuccess, signFail } = authSlice.actions
export default authSlice.reducer
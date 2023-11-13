import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    loginModalOpen: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        setLoginModalOpen: (state, action) => {
            state.loginModalOpen = action.payload
        }
    }
})

export const { setCurrentUser, setLoginModalOpen } = userSlice.actions

export const selectCurrentUser = (state) => state.user.currentUser
export const isLoginModalOpen = (state) => state.user.loginModalOpen

export const userReducer = userSlice.reducer

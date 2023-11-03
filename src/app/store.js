import logger from 'redux-logger'

import { configureStore } from '@reduxjs/toolkit'

import { userReducer } from '../features/users/userSlice'

export const store = configureStore({
    reducer: {
        user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([logger])
})

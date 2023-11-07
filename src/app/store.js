import logger from 'redux-logger'

import { configureStore } from '@reduxjs/toolkit'

import { termsReducer } from '../features/termsConditions/termsSlice'
import { userReducer } from '../features/users/userSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        terms: termsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([logger])
})

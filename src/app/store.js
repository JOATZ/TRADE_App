import logger from 'redux-logger'

import { configureStore } from '@reduxjs/toolkit'

import { dataReducer } from '../features/dataList/dataListSlice'
import { termsReducer } from '../features/termsConditions/termsSlice'
import { userReducer } from '../features/users/userSlice'
import { darkModeSlice } from '../utils/darkMode'

export const store = configureStore({
    reducer: {
        user: userReducer,
        terms: termsReducer,
        mode: darkModeSlice.reducer,
        data: dataReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([logger])
})

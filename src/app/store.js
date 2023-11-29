import { dataReducer } from 'features/dataList/dataListSlice'
import { termsReducer } from 'features/termsConditions/termsSlice'
import { userReducer } from 'features/users/userSlice'
import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { darkModeSlice } from 'utils/darkMode'

import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    user: userReducer,
    terms: termsReducer,
    mode: darkModeSlice.reducer,
    data: dataReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['data', 'terms']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([logger])
})

export const persistor = persistStore(store)

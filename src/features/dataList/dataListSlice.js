import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dataList: []
}

const dataListSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        logDataToArray: (state, action) => {
            state.dataList.push(action.payload)
        },
        removeDataFromArray: (state, action) => {
            state.dataList = state.dataList.filter(
                (_, index) => index !== action.payload
            )
        }
    }
})

export const { logDataToArray, removeDataFromArray } = dataListSlice.actions

export const getData = (state) => state.data.dataList

export const dataReducer = dataListSlice.reducer

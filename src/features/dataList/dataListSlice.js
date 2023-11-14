import { v4 as uuidv4 } from 'uuid'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { baseUrl } from '../../app/shared/baseUrl'
import { mapDataListURL } from '../../utils/mapDataURL'

export const fetchDataList = createAsyncThunk(
    'dataList/fetchDataList',
    async () => {
        const response = await fetch(baseUrl + 'dataList')
        if (!response.ok) {
            return Promise.reject('Unable to Fetch, status: ' + response.status)
        }
        const data = await response.json()
        return data
    }
)
//this is looping post requests for each item in the array, it is json-server limitation, modify for batch when able
export const postDataList = createAsyncThunk(
    'dataList/postDataList',
    async (dataList, { dispatch }) => {
        // Fetch the current data from the server
        const currentDataResponse = await fetch(baseUrl + 'dataList')
        const currentData = await currentDataResponse.json()

        // Filter dataList to only include items that are not already in currentData
        const newDataList = dataList.filter(
            (item) => !currentData.some((currentItem) => currentItem.id === item.id)
        )

        // Post the new items
        for (const item of newDataList) {
            const response = await fetch(baseUrl + 'dataList', {
                method: 'POST',
                body: JSON.stringify(item),
                headers: { 'Content-Type': 'application/json' }
            })
            if (!response.ok) {
                return Promise.reject(
                    'Unable to fetch, status: ' + response.status
                )
            }

        }
        if (newDataList.length === 0) {
            alert('Up to date')
        }
    }
)

export const deleteData = createAsyncThunk(
    'dataList/deleteData',
    async (id) => {
        const response = await fetch(`${baseUrl}dataList/${id}`, {
            method: 'DELETE',
        })
        if (!response.ok) {
            throw new Error('Unable to delete, status: ' + response.status)
        }
    }
)

const initialState = {
    dataList: [],
    isLoading: true,
    errMsg: ''
}

const dataListSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        logDataToArray: (state, action) => {
            const newData = {
                id: uuidv4(),
                ...action.payload
            }
            state.dataList.push(newData)
        },
        removeDataFromArray: (state, action) => {
            state.dataList = state.dataList.filter(
                (item) => item.id !== action.payload
            )
        }
    },
    extraReducers: {
        [fetchDataList.pending]: (state) => {
            state.isLoading = true
        },
        [fetchDataList.fulfilled]: (state, action) => {
            state.isLoading = false
            state.errMsg = ''
            state.dataList = mapDataListURL(action.payload)
        },
        [fetchDataList.rejected]: (state, action) => {
            state.isLoading = false
            state.errMsg = action.error ? action.error.message : 'Fetch failed'
        },
        [postDataList.rejected]: (state, action) => {
            alert(
                'Your data could not be posted\nError: ' +
                    (action.error ? action.error.message : 'Fetch failed')
            )
        }
    }
})

export const { logDataToArray, removeDataFromArray } = dataListSlice.actions

export const getData = (state) => state.data.dataList

export const dataReducer = dataListSlice.reducer

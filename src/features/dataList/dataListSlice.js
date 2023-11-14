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
        const currentDataResponse = await fetch(baseUrl + 'dataList')
        const currentData = await currentDataResponse.json()

        const newDataList = dataList.filter(
            (item) =>
                !currentData.some((currentItem) => currentItem.id === item.id)
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
        const updatedDataResponse = await fetch(baseUrl + 'dataList')
        const updatedData = await updatedDataResponse.json()
        return updatedData
    }
)

export const deleteData = createAsyncThunk(
    'dataList/deleteData',
    async (id) => {
        const response = await fetch(`${baseUrl}dataList/${id}`, {
            method: 'DELETE'
        })
        if (!response.ok) {
            throw new Error('Unable to delete, status: ' + response.status)
        }
        // Fetch the updated data list from the server
        const updatedDataResponse = await fetch(baseUrl + 'dataList')
        const updatedData = await updatedDataResponse.json()

        return updatedData
    }
)

const initialState = {
    dataList: [],
    selectedData: null,
    isLoading: true,
    isPosting: false,
    isDeleting: false,
    errMsg: ''
}

const dataListSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setSelectedData: (state, action) => {
            state.selectedData = action.payload
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
        [postDataList.pending]: (state) => {
            state.isPosting = true
        },
        [postDataList.fulfilled]: (state, action) => {
            state.isPosting = false
            state.dataList = mapDataListURL(action.payload)
            state.selectedData = state.dataList[0]
        },
        [postDataList.rejected]: (state, action) => {
            state.isPosting = false
            alert(
                'Your data could not be posted\nError: ' +
                    (action.error ? action.error.message : 'Fetch failed')
            )
        },
        [deleteData.pending]: (state) => {
            state.isDeleting = true
        },
        [deleteData.fulfilled]: (state, action) => {
            state.isDeleting = false
            state.dataList = mapDataListURL(action.payload)
            state.selectedData = state.dataList[0]
        },
        [deleteData.rejected]: (state, action) => {
            state.isDeleting = false
            state.errMsg = action.error ? action.error.message : 'Delete failed'
        }
    }
})

export const getData = (state) => state.data.dataList
export const getSelectedData = (state) => state.data.selectedData
export const dataReducer = dataListSlice.reducer
export const { setSelectedData } = dataListSlice.actions

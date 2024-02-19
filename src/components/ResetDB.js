import React from 'react'
import {
    deleteAllData,
    getData,
    resetDataList
} from 'features/dataList/dataListSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap' // Assuming you're using reactstrap

const Reset = () => {
    const dispatch = useDispatch()
    const dataList = useSelector(getData)

    const resetDB = async () => {
        const resultAction = await dispatch(deleteAllData())

        if (deleteAllData.fulfilled.match(resultAction)) {
            dispatch(resetDataList()) // Reset local state only if delete operation was successful
        } else {
            if (resultAction.payload) {
                // Handle the error from the server
            } else {
                // Handle the error thrown before making the request
            }
        }
    }

    return (
        <Button color='danger' onClick={resetDB}>
            Reset DB
        </Button>
    )
}

export default Reset

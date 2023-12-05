import Error from 'components/Error'
import Loading from 'components/Loading'
import Working from 'components/Working'
import { getTransactions } from 'features/dataList/dataListSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Col } from 'reactstrap'

import { createSelector } from '@reduxjs/toolkit'

// Define a selector to get unique items
const selectUniqueItems = createSelector([getTransactions], (transactions) => [
    ...new Set(transactions.map((transaction) => transaction.item))
])

const DataCollapse = () => {
    const dispatch = useDispatch()
    const transactions = useSelector(getTransactions)
    const uniqueItems = useSelector(selectUniqueItems)
    const isLoading = useSelector((state) => state.data.isLoading)
    const errMsg = useSelector((state) => state.data.errMsg)
    const isWorking = useSelector(
        (state) => state.data.isPosting || state.data.isDeleting
    )

    if (isLoading) {
        return (
            <Col>
                <Loading />
            </Col>
        )
    }

    if (isWorking) {
        return <Col>{isWorking ? <Working /> : ''}</Col>
    }

    if (errMsg) {
        return (
            <Col>
                <Error errMsg={errMsg} />
            </Col>
        )
    }
    if (transactions.length === 0) {
        return (
            <Col>
                <p>No Data</p>
            </Col>
        )
    }

    return (
        <div>
            {uniqueItems.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    )
}

export default DataCollapse

import { useDispatch, useSelector } from 'react-redux'
import { Col } from 'reactstrap'

import Error from '../../components/Error'
import FileListPill from '../../components/FileListPill'
import Loading from '../../components/Loading'
import Working from '../../components/Working'

import { getData, setSelectedData } from './dataListSlice'

const DataList = () => {
    const dispatch = useDispatch()
    const dataList = useSelector(getData)
    // get dataList from Redux store
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
    if (dataList.length === 0) {
        return (
            <Col>
                <p>No Data</p>
            </Col>
        )
    }
    return (
        <>
            {dataList.map((data, index) => (
                <FileListPill
                    key={index}
                    data={data}
                    index={index}
                    setSelectedData={() => dispatch(setSelectedData(data))}
                />
            ))}
        </>
    )
}

export default DataList

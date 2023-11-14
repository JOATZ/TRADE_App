import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Col } from 'reactstrap'

import Error from '../../components/Error'
import FileListPill from '../../components/FileListPill'
import Loading from '../../components/Loading'

import { getData } from './dataListSlice'

const DataList = ({ setSelectedData }) => {
    const dataList = useSelector(getData)
    // get dataList from Redux store
    const isLoading = useSelector((state) => state.data.isLoading)
    const errMsg = useSelector((state) => state.data.errMsg)

    if (isLoading) {
        return (
            <Col>
                <Loading />
            </Col>
        )
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
                    setSelectedData={setSelectedData}
                />
            ))}
        </>
    )
}

export default DataList

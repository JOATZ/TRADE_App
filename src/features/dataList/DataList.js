import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Row } from 'reactstrap'

import FileListPill from '../../components/FileListPill'

import { getData } from './dataListSlice'

const DataList = ({setSelectedData}) => {
    const dataList = useSelector(getData)
    // get dataList from Redux store

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

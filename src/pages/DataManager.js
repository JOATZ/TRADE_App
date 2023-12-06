import React, { useEffect } from 'react'
import FileUploadModal from 'components/FileUploadModal'
import JsonToTable from 'components/JsonToTable'
import DataList from 'features/dataList/DataList'
import {
    fetchDataList,
    getData,
    getSelectedData,
    postDataList,
    setSelectedData
} from 'features/dataList/dataListSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from 'reactstrap'
import mt4ToJSON from 'utils/mt4ToJSON'

const DataManager = () => {
    const dispatch = useDispatch()
    const dataList = useSelector(getData)
    const selectedData = useSelector(getSelectedData)

    useEffect(() => {
        dispatch(fetchDataList())
    }, [dispatch])

    const handleUpload = (uploadOption, fileType, file) => {
        if (
            uploadOption.value === 'tradesTransactions' &&
            fileType.value === 'mt4'
        ) {
            // Call the mt4ToJSON parser with the file
            mt4ToJSON(file)
                .then((data) => {
                    // Handle the parsed data
                })
                .catch((error) => {
                    // Handle the error
                })
        }
        // Handle other cases
    }

    return (
        <Container fluid>
            <Row className='page-row'>
                <Col md={3} className='data-list-container'>
                    <FileUploadModal handleUpload={handleUpload} />
                    <Row className='data-pill-container'>
                        <Col className='scrollable-container'>
                            <DataList />
                        </Col>
                    </Row>
                </Col>
                <Col md={9} className='preview-container'>
                    {selectedData ? <JsonToTable data={selectedData} /> : ''}
                </Col>
            </Row>
        </Container>
    )
}

export default DataManager

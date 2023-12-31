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
import csvParser from 'utils/csvParser'
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
            fileType.value === 'mt4/5'
        ) {
            mt4ToJSON(file)
                .then((json) => {
                    dispatch(postDataList(dataList.concat(json)))
                    dispatch(setSelectedData(json))
                })
                .catch(console.error)
        }
        if (uploadOption.value === 'symbolData' && fileType.value === 'csv') {
            csvParser(file)
                .then((json) => {
                    dispatch(postDataList(dataList.concat(json)))
                    dispatch(setSelectedData(json))
                })
                .catch(console.error)
        }
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

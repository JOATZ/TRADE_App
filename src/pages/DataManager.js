import React, { useEffect, useState } from 'react'
import DragDropBox from 'components/DragDropBox' //for file drop
import JsonToTable from 'components/JsonToTable'
import DataList from 'features/dataList/DataList'
//for pushing data to array
import {
    fetchDataList,
    getData,
    getSelectedData,
    postDataList,
    setSelectedData
} from 'features/dataList/dataListSlice'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select' //file type selector
import { Col, Container, Row } from 'reactstrap'
import mt4ToJSON from 'utils/mt4ToJSON'

const options = [
    { value: 'mt4', label: 'MT4 statement.htm' },
    { value: 'mt5', label: 'MT5 statement' },
    { value: 'csv', label: '.csv file format' }
]

const DataManager = () => {
    const dispatch = useDispatch()
    const [selectedOption, setSelectedOption] = useState(null)
    const [droppedFile, setDroppedFile] = useState(null)
    const dataList = useSelector(getData)
    const selectedData = useSelector(getSelectedData)

    useEffect(() => {
        dispatch(fetchDataList())
    }, [dispatch])
    //will execute parser when both file is uploaded and parser type is selected
    // regardless of order
    const handleFileDrop = (file) => {
        setDroppedFile(file)
        if (selectedOption && selectedOption.value === 'mt4') {
            mt4ToJSON(file)
                .then((json) => {
                    dispatch(postDataList(dataList.concat(json))) // add data to dataList in server db
                    dispatch(setSelectedData(json)) //display latest upload in preview
                })
                .catch(console.error)
        }
    }

    const handleOptionChange = (option) => {
        setSelectedOption(option)
        if (option.value === 'mt4' && droppedFile) {
            mt4ToJSON(droppedFile)
                .then((json) => {
                    dispatch(postDataList(dataList.concat(json))) //add data to dataList in server db
                    dispatch(setSelectedData(json)) //display latest upload
                })
                .catch(console.error)
        }
    }

    return (
        <Container fluid>
            <Row className='page-row'>
                <Col md={3} className='data-list-container'>
                    <DragDropBox
                        className='drag-drop-box'
                        onFileDrop={handleFileDrop}
                    />
                    <Select
                        className='file-select'
                        options={options}
                        placeholder='Choose Source File Type'
                        onChange={handleOptionChange}
                    />
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
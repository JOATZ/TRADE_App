// src/pages/HomePage.js
import React, { useState } from 'react'
//for pushing data to array
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import { Col, Container, Row } from 'reactstrap'

//for file drop
import DragDropBox from '../components/DragDropBox'
import DataList from '../features/dataList/DataList'
//for pushing data to array
import { logDataToArray } from '../features/dataList/dataListSlice'
import mt4ToJSON from '../utils/mt4ToJSON'

const options = [
    { value: 'mt4', label: 'MT4 statement.htm' },
    { value: 'mt5', label: 'MT5 statement' },
    { value: 'csv', label: '.csv file format' }
]

const HomePage = () => {
    const dispatch = useDispatch()
    const [selectedOption, setSelectedOption] = useState(null)
    const [droppedFile, setDroppedFile] = useState(null)
    const [selectedData, setSelectedData] = useState(null)
    const [previewContent, setPreviewContent] = useState('')
    //will execute parser when both file is uploaded and parser type is selected
    // regardless of order
    const handleFileDrop = (file) => {
        setDroppedFile(file)
        if (selectedOption && selectedOption.value === 'mt4') {
            mt4ToJSON(file) //stringify just for preview testing not needed in final
                .then((json) => {
                    setPreviewContent(JSON.stringify(json, null, 2))
                    dispatch(logDataToArray(json))
                })
                .catch(console.error)
        }
    }

    const handleOptionChange = (option) => {
        setSelectedOption(option)
        if (option.value === 'mt4' && droppedFile) {
            mt4ToJSON(droppedFile)
                .then((json) =>
                    setPreviewContent(JSON.stringify(json, null, 2))
                )
                .catch(console.error)
        }
    }

    return (
        <Container fluid>
            <Row>
                <Col>Top row content</Col>
            </Row>
            <Row>
                <Col md={3} className='data-list-container'>
                    <DragDropBox onFileDrop={handleFileDrop} />
                    <Select
                        options={options}
                        placeholder='Choose Source File Type'
                        onChange={handleOptionChange}
                    />
                    <Row className='data-list-container'>
                        <DataList setSelectedData={setSelectedData} />
                    </Row>
                </Col>
                <Col md={9} className='preview-container'>{selectedData?JSON.stringify(selectedData,null,2):''}</Col>
            </Row>
        </Container>
    )
}

export default HomePage

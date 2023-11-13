// src/pages/HomePage.js
import React, { useState } from 'react'
import Select from 'react-select'
import { Col, Container, Row } from 'reactstrap'

import DragDropBox from '../components/DragDropBox'
import mt4ToJSON from '../utils/mt4ToJSON'

const options = [
    { value: 'mt4', label: 'MT4 statement.htm' },
    { value: 'mt5', label: 'MT5 statement' },
    { value: 'csv', label: '.csv file format' }
]

const HomePage = () => {
    const [selectedOption, setSelectedOption] = useState(null)
    const [droppedFile, setDroppedFile] = useState(null)
    const [previewContent, setPreviewContent] = useState('')

    const handleFileDrop = (file) => {
        setDroppedFile(file)
        if (selectedOption && selectedOption.value === 'mt4') {
            mt4ToJSON(file).then(setPreviewContent).catch(console.error)
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
        <Container>
            <Row>
                <Col>Top row content</Col>
            </Row>
            <Row>
                <Col md={3}>
                    <DragDropBox onFileDrop={handleFileDrop} />
                    <Select
                        options={options}
                        placeholder='Choose Source File Type'
                        onChange={handleOptionChange}
                    />
                    <Row>file list</Row>
                </Col>
                <Col md={9}>{previewContent}</Col>
            </Row>
        </Container>
    )
}

export default HomePage

import React from 'react'
import Select from 'react-select'
import { Col, Container, Row } from 'reactstrap'

import DragDropBox from '../components/DragDropBox'

const options = [
    { value: 'mt4', label: 'MT4 statement.htm' },
    { value: 'mt5', label: 'MT5 statement' },
    { value: 'csv', label: '.csv file format' }
]

const HomePage = () => {
    const onOpen = () => {
        console.log('Open file dialog')
    }

    return (
        <Container>
            <Row>
                <Col>Top row content</Col>
            </Row>
            <Row>
                <Col md={3}>
                    <DragDropBox onOpen={onOpen} />
                    <Select
                        options={options}
                        placeholder='Choose Source File Type'
                    />
                    <Row>file list</Row>
                </Col>
                <Col md={9}>PREVIEW AREA</Col>
            </Row>
        </Container>
    )
}

export default HomePage

import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const CompareData = () => {
    return (
        <Container
            fluid
            className='trade-analysis-container'
            style={{ border: 'yellow dashed 5px', height: '100%' }}
        >
            <Row style={{ ...styles.row, height: '5%' }}>Tool Bar</Row>
            <Row style={{ ...styles.row, height: '95%' }}>
                <Col sm={2} style={styles.col}>
                    Col 1
                </Col>
                <Col sm={10} style={styles.col}>
                    Col 2
                </Col>
            </Row>
        </Container>
    )
}

const styles = {
    row: {
        border: 'solid black 1px',
        display: 'flex',
        justifyContent: 'center'
    },
    col: {
        border: 'dashed green 1px'
    }
}

export default CompareData

import React from 'react'
import DataCollapse from 'components/DataCollapse'
import DataList from 'features/dataList/DataList'
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets'
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
                <Col sm={2}>
                    {' '}
                    <DataList />
                </Col>
                <Col sm={10}>
                    <AdvancedRealTimeChart
                        theme='dark'
                        autosize
                        width='100%'
                    ></AdvancedRealTimeChart>
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '10px',
        border: 'solid black 1px',
        borderRadius: '15px',
        height: '85vh'
    }
}

export default CompareData

import { deleteData } from 'features/dataList/dataListSlice'
import { useDispatch } from 'react-redux'
import { Button, Col, Row } from 'reactstrap'

const FileListPill = ({ data, setSelectedData }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        setSelectedData(data)
    }

    const handleRemove = (event) => {
        event.stopPropagation() // Prevent triggering handleClick when clicking handleRemove
        dispatch(deleteData(data.id))
    }

    if (data.dataType === 'tradeData') {
        return (
            <Row onClick={handleClick} className='parent-pill-row'>
                <Col xs={10} className='pill-col'>
                    <Row className='pill-row'>
                        Statement Date:{' '}
                        {new Date(data.statementDate).toLocaleString()}
                    </Row>
                    <Row className='pill-row'>
                        {data.name} Account: {data.account} Transactions:{' '}
                        {data.numTrades}
                    </Row>
                </Col>
                <Col xs={2} className='pill-col'>
                    <Button
                        color='danger'
                        onClick={handleRemove}
                        style={{
                            width: '30px',
                            height: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '50%',
                            color: 'white',
                            fontSize: '1rem'
                        }}
                    >
                        X
                    </Button>
                </Col>
            </Row>
        )
    }

    if (data.dataType === 'symbolData') {
        return (
            <Row onClick={handleClick} className='parent-pill-row'>
                <Col xs={10} className='pill-col'>
                    <Row className='pill-row'>
                        Symbol: {data.name}-{data.timeframe}
                    </Row>
                    <Row className='pill-row'>Range:{data.dateRange}</Row>
                </Col>
                <Col xs={2} className='pill-col'>
                    <Button
                        color='danger'
                        onClick={handleRemove}
                        style={{
                            width: '30px',
                            height: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '50%',
                            color: 'white',
                            fontSize: '1rem'
                        }}
                    >
                        X
                    </Button>
                </Col>
            </Row>
        )
    }
}

export default FileListPill

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

    return (
        <Row onClick={handleClick} className='parent-pill-row'>
            <Col xs={10} className='pill-col'>
                <Row className='pill-row'>
                    {data.date}
                    {'     '}
                    {data.time}
                </Row>
                <Row className='pill-row'>
                    Number of Transactions: {data.numTrades}
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

export default FileListPill

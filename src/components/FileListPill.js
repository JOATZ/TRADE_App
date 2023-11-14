import { useDispatch } from 'react-redux'
import { Button, Col, Row } from 'reactstrap'

import {
    deleteData,
    removeDataFromArray
} from '../features/dataList/dataListSlice'

const FileListPill = ({ data, setSelectedData }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        setSelectedData(data)
    }

    const handleRemove = (event) => {
        event.stopPropagation() // Prevent triggering handleClick when clicking handleRemove
        dispatch(deleteData(data.id))
        dispatch(removeDataFromArray(data.id))
    }

    return (
        <Row onClick={handleClick} className='parent-pill-row'>
            <Col md={10} className='pill-col'>
                <Row className='pill-row'>
                    <Col className='pill-col'>{data.date}</Col>
                    <Col className='pill-col'>{data.time}</Col>
                </Row>
                <Row className='pill-row'>
                    Number of Transactions: {data.numTrades}
                </Row>
            </Col>
            <Col md={2} className='pill-col'>
                <Button
                    className='pill-remove-button'
                    onClick={handleRemove}
                    style={{
                        border: 'none',
                        background: 'red',
                        fontSize: '1rem'
                    }}
                >
                    &times;
                </Button>
            </Col>
        </Row>
    )
}

export default FileListPill

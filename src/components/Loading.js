import { Col, Spinner } from 'reactstrap'

const Loading = () => {
    return (
        <Col className='text-center'>
            <Spinner
                color='secondary'
                style={{ width: '3rem', height: '3rem' }}
            />
            <p>Loading...</p>
        </Col>
    )
}

export default Loading

import { Col, Spinner } from 'reactstrap'

const Working = () => {
    return (
        <Col className='text-center'>
            <Spinner
                color='secondary'
                style={{ width: '3rem', height: '3rem' }}
            />
            <p>Working...</p>
        </Col>
    )
}

export default Working

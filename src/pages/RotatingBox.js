import React from 'react'
import RotatingBox from 'features/Rotating Box Example/RotatingBox'
import { Container } from 'reactstrap'

const Box = () => {
    return (
        <Container
            fluid
            className='home-page-container'
            style={{ height: '100%' }}
        >
            <RotatingBox />
        </Container>
    )
}

export default Box

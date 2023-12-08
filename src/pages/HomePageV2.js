import React from 'react'
import MarketOverview from 'features/tvWidgets/MarketOverview'
import { Col, Container, Row } from 'reactstrap'

const HomePageV2 = () => {
    return (
        <Container
            fluid
            className='home-page-container'
            style={{ height: '100%' }}
        >
            <MarketOverview />
        </Container>
    )
}

const styles = {
    row: {
        border: 'solid black 1px'
    },
    col: {
        border: 'dashed green 1px'
    }
}

export default HomePageV2

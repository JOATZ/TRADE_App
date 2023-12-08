import React from 'react'
import { MdConstruction } from 'react-icons/md'
import { Container } from 'reactstrap'

const TradeLog = () => {
    return (
        <Container
            fluid
            className='trade-log-container'
            style={{
                color: 'var(--color-accent)',
                background: 'var(--color-background)'
            }}
        >
            <MdConstruction style={{ height: '50vh', width: '100vw' }} />
            Working on it!
        </Container>
    )
}

export default TradeLog

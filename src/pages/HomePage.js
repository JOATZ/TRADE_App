import React, { useEffect, useState } from 'react'
import HomeButton from 'components/HomeButton'
import SubHeader from 'components/SubHeader'
import { Col, Container, Row } from 'reactstrap'

const HomePage = () => {
    return (
        <Container fluid>
            <HomeButton path='/datamanger' />
        </Container>
    )
}

export default HomePage

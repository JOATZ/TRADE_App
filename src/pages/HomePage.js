import React, { useEffect, useState } from 'react'
import SubHeader from 'components/SubHeader'
import { Col, Container, Row } from 'reactstrap'

const HomePage = () => {
    return (
        <Container fluid>
            <SubHeader current='Home' />
            The HomePage
        </Container>
    )
}

export default HomePage

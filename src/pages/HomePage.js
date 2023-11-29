import React from 'react'
import { AwesomeButton } from 'react-awesome-button'
import { NavLink } from 'react-router-dom'
import { Container } from 'reactstrap'

import 'react-awesome-button/dist/styles.css'

const HomePage = () => {
    return (
        <Container fluid>
            <NavLink className='nav-link' to='/datamanager'>
                <AwesomeButton type='primary' style={buttonStyles}>
                    Data Manager
                </AwesomeButton>
            </NavLink>
        </Container>
    )
}
//AwesomeButtonStyleOverrides
const buttonStyles = {
    '--button-default-height': '100px',
    '--button-default-font-size': '20px'
}

export default HomePage

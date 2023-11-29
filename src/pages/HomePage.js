import React from 'react'
import { AwesomeButton } from 'react-awesome-button'
import { NavLink } from 'react-router-dom'
import { Container, Row } from 'reactstrap'

import 'react-awesome-button/dist/styles.css'

const HomePage = () => {
    return (
        <Container fluid className='home-page-container'>
            <Row className='nav-btn-row'>
                <NavLink className='nav-link col-3' to='/datamanager'>
                    <AwesomeButton type='primary' style={buttonStyles}>
                        Data Manager
                    </AwesomeButton>
                </NavLink>
                <NavLink className='nav-link col-3' to='/datamanager'>
                    <AwesomeButton type='primary' style={buttonStyles}>
                        Page 2
                    </AwesomeButton>
                </NavLink>
                <NavLink className='nav-link col-3' to='/datamanager'>
                    <AwesomeButton type='primary' style={buttonStyles}>
                        Page 3
                    </AwesomeButton>
                </NavLink>
                <NavLink className='nav-link col-3' to='/datamanager'>
                    <AwesomeButton type='primary' style={buttonStyles}>
                        Page 4
                    </AwesomeButton>
                </NavLink>
            </Row>
            <Row className='nav-btn-row'>
                <NavLink className='nav-link col-3' to='/datamanager'>
                    <AwesomeButton type='primary' style={buttonStyles}>
                        Page 5
                    </AwesomeButton>
                </NavLink>
                <NavLink className='nav-link col-3' to='/datamanager'>
                    <AwesomeButton type='primary' style={buttonStyles}>
                        Page 6
                    </AwesomeButton>
                </NavLink>
                <NavLink className='nav-link col-3' to='/datamanager'>
                    <AwesomeButton type='primary' style={buttonStyles}>
                        Page 7
                    </AwesomeButton>
                </NavLink>
                <NavLink className='nav-link col-3' to='/datamanager'>
                    <AwesomeButton type='primary' style={buttonStyles}>
                        Page 8
                    </AwesomeButton>
                </NavLink>
            </Row>
        </Container>
    )
}
//AwesomeButtonStyleOverrides
const buttonStyles = {
    height: '80%',
    fontSize: '40px',
    width: '80%'
}

export default HomePage

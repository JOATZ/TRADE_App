import React from 'react'
import HomePageTile from 'components/HomePageTile'
import { BsDatabaseFillGear } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { Container, Row } from 'reactstrap'

const pageLinks = [
    { title: 'Data Manager', to: '/datamanager', icon: <BsDatabaseFillGear /> },
    { title: 'A very', to: '/datamanager', icon: <BsDatabaseFillGear /> },
    { title: 'Title 3', to: '/datamanager', icon: <BsDatabaseFillGear /> },
    { title: 'Title 4', to: '/datamanager', icon: <BsDatabaseFillGear /> },
    { title: 'Title 5', to: '/datamanager', icon: <BsDatabaseFillGear /> },
    { title: 'Title 6', to: '/datamanager', icon: <BsDatabaseFillGear /> },
    { title: 'Title 7', to: '/datamanager', icon: <BsDatabaseFillGear /> },
    { title: 'Title 8', to: '/datamanager', icon: <BsDatabaseFillGear /> }
]

const HomePage = () => {
    return (
        <Container
            fluid
            className='home-page-container'
            style={{ overflowY: 'scroll' }}
        >
            <Row className='nav-btn-row'>
                {pageLinks.map((page, index) => (
                    <NavLink
                        key={index}
                        style={navStyles.navLink}
                        className='nav-link col-6 col-md-3'
                        to={page.to}
                    >
                        <HomePageTile title={page.title} icon={page.icon} />
                    </NavLink>
                ))}
            </Row>
        </Container>
    )
}

const navStyles = {
    navLink: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }
}

export default HomePage

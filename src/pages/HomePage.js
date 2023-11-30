import React from 'react'
import HomePageTile from 'components/HomePageTile'
import { BsDatabaseFillGear } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { Container, Row } from 'reactstrap'

const pageLinks = [
    { title: 'Title 1', to: '/path1', icon: <BsDatabaseFillGear /> },
    { title: 'Title 2', to: '/path2', icon: <BsDatabaseFillGear /> },
    { title: 'Title 3', to: '/path3', icon: <BsDatabaseFillGear /> }
]
const HomePage = () => {
    return (
        <Container fluid className='home-page-container'>
            <Row className='nav-btn-row'>
                <NavLink
                    style={navStyles.navLink}
                    className='nav-link col-6 col-md-3'
                    to='/datamanager'
                >
                    <HomePageTile
                        title='Data Manager'
                        icon={<BsDatabaseFillGear />}
                    />
                </NavLink>
                <NavLink
                    className='nav-link col-6 col-md-3'
                    style={navStyles.navLink}
                    to='/datamanager'
                >
                    <HomePageTile title='Chart' icon={<BsDatabaseFillGear />} />
                </NavLink>
                <NavLink
                    className='nav-link col-6 col-md-3'
                    style={navStyles.navLink}
                    to='/datamanager'
                >
                    <HomePageTile
                        title='Profile'
                        icon={<BsDatabaseFillGear />}
                    />
                </NavLink>
                <NavLink
                    className='nav-link col-6 col-md-3'
                    style={navStyles.navLink}
                    to='/datamanager'
                >
                    <HomePageTile
                        title='Page 4'
                        icon={<BsDatabaseFillGear />}
                    />
                </NavLink>
                <NavLink
                    className='nav-link col-6 col-md-3'
                    style={navStyles.navLink}
                    to='/datamanager'
                >
                    <HomePageTile
                        title='Page 5'
                        icon={<BsDatabaseFillGear />}
                    />
                </NavLink>
                <NavLink
                    className='nav-link col-6 col-md-3'
                    style={navStyles.navLink}
                    to='/datamanager'
                >
                    <HomePageTile
                        title='Page 6'
                        icon={<BsDatabaseFillGear />}
                    />
                </NavLink>
                <NavLink
                    className='nav-link col-6 col-md-3'
                    style={navStyles.navLink}
                    to='/datamanager'
                >
                    <HomePageTile
                        title='Page 7'
                        icon={<BsDatabaseFillGear />}
                    />
                </NavLink>
                <NavLink
                    className='nav-link col-6 col-md-3'
                    style={navStyles.navLink}
                    to='/datamanager'
                >
                    <HomePageTile
                        title='Page 8'
                        icon={<BsDatabaseFillGear />}
                    />
                </NavLink>
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

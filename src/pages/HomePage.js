import React from 'react'
import HomePageTile from 'components/HomePageTile'
import { BsDatabaseFillGear } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { Container, Row } from 'reactstrap'

const HomePage = () => {
    return (
        <Container fluid className='home-page-container'>
            <Row className='nav-btn-row'>
                <NavLink className='nav-link col-3' to='/datamanager'>
                    <HomePageTile
                        title='Data Manager'
                        icon={<BsDatabaseFillGear />}
                    />
                </NavLink>
                <NavLink className='nav-link col-3' to='/datamanager'>
                    <HomePageTile
                        title='Data Manager'
                        icon={<BsDatabaseFillGear />}
                    />
                </NavLink>
                <NavLink className='nav-link col-3' to='/datamanager'>
                    <HomePageTile
                        title='Data Manager'
                        icon={<BsDatabaseFillGear />}
                    />
                </NavLink>
                <NavLink className='nav-link col-3' to='/datamanager'>
                    <HomePageTile
                        title='Data Manager'
                        icon={<BsDatabaseFillGear />}
                    />
                </NavLink>
            </Row>
            <Row className='nav-btn-row'>
                <NavLink className='nav-link col-3' to='/datamanager'>
                    <HomePageTile
                        title='Data Manager'
                        icon={<BsDatabaseFillGear />}
                    />
                </NavLink>
                <NavLink className='nav-link col-3' to='/datamanager'>
                    <HomePageTile
                        title='Data Manager'
                        icon={<BsDatabaseFillGear />}
                    />
                </NavLink>
                <NavLink className='nav-link col-3' to='/datamanager'>
                    <HomePageTile
                        title='Data Manager'
                        icon={<BsDatabaseFillGear />}
                    />
                </NavLink>
                <NavLink className='nav-link col-3' to='/datamanager'>
                    <HomePageTile
                        title='Data Manager'
                        icon={<BsDatabaseFillGear />}
                    />
                </NavLink>
            </Row>
        </Container>
    )
}

export default HomePage

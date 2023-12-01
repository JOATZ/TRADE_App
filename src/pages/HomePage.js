import React from 'react'
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
        <Container fluid className='home-page-container'>
            {pageLinks.map((page, index) => (
                <NavLink key={index} className='home-page-tile' to={page.to}>
                    <div className='title'>{page.title}</div>
                    <div className='icon'>{page.icon}</div>
                </NavLink>
            ))}
        </Container>
    )
}

export default HomePage

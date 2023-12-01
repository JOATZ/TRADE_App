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
    const tileStyles = {
        title: {
            height: '30%',
            width: '100%',
            border: 'dashed red 3px'
        },
        icon: {
            height: '70%',
            width: '100%',
            border: 'dashed red 3px'
        }
    }
    return (
        <Container fluid className='home-page-container'>
            {pageLinks.map((page, index) => (
                <NavLink key={index} className='home-page-tile' to={page.to}>
                    <div style={tileStyles.title}>{page.title}</div>
                    <div style={tileStyles.icon}>{page.icon}</div>
                </NavLink>
            ))}
        </Container>
    )
}

export default HomePage

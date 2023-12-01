import React from 'react'
import {
    Bs2CircleFill,
    BsAlarmFill,
    BsArrowLeftRight,
    BsBadgeHdFill,
    BsDatabaseFillGear,
    BsJournalRichtext
} from 'react-icons/bs'
import {} from 'react-icons/bs'
import { FaMagnifyingGlassChart } from 'react-icons/fa6'
import { RiStockFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import { Button, Container } from 'reactstrap'

const pageLinks = [
    { title: 'Data Manager', to: '/datamanager', icon: <BsDatabaseFillGear /> },
    { title: 'Chart Data', to: '/datamanager', icon: <RiStockFill /> },
    { title: 'Trade Log', to: '/datamanager', icon: <BsJournalRichtext /> },
    {
        title: 'Trade Analysis',
        to: '/datamanager',
        icon: <FaMagnifyingGlassChart />
    },
    {
        title: 'Title 5',
        to: '/datamanager',
        icon: <BsAlarmFill />
    },
    { title: 'Title 6', to: '/datamanager', icon: <BsArrowLeftRight /> },
    { title: 'Title 7', to: '/datamanager', icon: <BsBadgeHdFill /> },
    { title: 'Title 8', to: '/datamanager', icon: <Bs2CircleFill /> }
]

const HomePage = () => {
    return (
        <Container fluid className='home-page-container'>
            {pageLinks.map((page, index) => (
                <NavLink key={index} className='home-page-tile' to={page.to}>
                    <div className='title-box'>{page.title}</div>
                    <div className='icon-box'>{page.icon}</div>
                </NavLink>
            ))}
        </Container>
    )
}

export default HomePage

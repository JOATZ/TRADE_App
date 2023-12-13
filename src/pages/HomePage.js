import React from 'react'
import { isTermsAccepted } from 'features/termsConditions/termsSlice'
import {
    Bs2CircleFill,
    BsAlarmFill,
    BsArrowLeftRight,
    BsBadgeHdFill,
    BsDatabaseFillGear,
    BsJournalRichtext
} from 'react-icons/bs'
import { FaMagnifyingGlassChart } from 'react-icons/fa6'
import { RiStockFill } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Container } from 'reactstrap'

const pageLinks = [
    { title: 'Data Manager', to: '/datamanager', icon: <BsDatabaseFillGear /> },
    { title: 'Chart Data', to: '/datamanager', icon: <RiStockFill /> },
    { title: 'Trade Log', to: '/tradelog', icon: <BsJournalRichtext /> },
    {
        title: 'Trade Analysis',
        to: '/tradeanalysis',
        icon: <FaMagnifyingGlassChart />
    },
    {
        title: 'Title 5',
        to: '/datamanager',
        icon: <BsAlarmFill />
    },
    { title: 'Compare Data', to: '/comparedata', icon: <BsArrowLeftRight /> },
    { title: 'Rotating Box', to: '/box', icon: <BsBadgeHdFill /> },
    { title: 'Home Page v2', to: '/homepagev2', icon: <Bs2CircleFill /> }
]

const HomePage = () => {
    const termsAccepted = useSelector(isTermsAccepted)
    if (termsAccepted) {
        return (
            <Container fluid className='home-page-container'>
                {pageLinks.map((page, index) => (
                    <NavLink
                        key={index}
                        className='home-page-tile'
                        to={page.to}
                    >
                        <div className='title-box'>{page.title}</div>
                        <div className='icon-box'>{page.icon}</div>
                    </NavLink>
                ))}
            </Container>
        )
    }
}

export default HomePage

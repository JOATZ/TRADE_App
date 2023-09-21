import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
} from 'reactstrap'

import tradeLogo from '../img/tradeLogoNoBg.png'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='mx-auto' href='/'>
                <img
                    src={tradeLogo}
                    alt='T.R.A.D.E. Logo'
                    className='float-start'
                />
                <h1 className='mt-1'>Trade Record Adaptation Data Engine</h1>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        </Navbar>
    )
}

export default Header

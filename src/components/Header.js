import { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { NavLink } from 'react-router-dom'
import {
    Collapse,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
} from 'reactstrap'

import tradeLogo from '../img/tradeLogoNoBg.png'

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const toggleDropdown = () => {
        setDropdownOpen((prevState) => !prevState)
    }

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='mx-auto' href='/'>
                <img src={tradeLogo} alt='T.R.A.D.E. Logo' />
                <h1 className='mt-1'>Trade Record Adaptation Data Engine</h1>
            </NavbarBrand>

                <Nav className='ml-auto' navbar>
                    <Dropdown
                        className='ms-auto'
                        isOpen={dropdownOpen}
                        toggle={toggleDropdown}
                    >
                        <DropdownToggle caret>
                            <CgProfile />
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Option 1</DropdownItem>
                            <DropdownItem>Option 2</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Nav>

        </Navbar>
    )
}

export default Header

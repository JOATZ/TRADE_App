import { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
} from 'reactstrap'

import tradeLogo from '../img/tradeLogoNoBg.png'

const Header = ({ acceptedTerms, loggedIn }) => {
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
            {acceptedTerms && (
                <Nav className='ml-auto' navbar>
                    <Dropdown
                        className='ms-auto'
                        isOpen={dropdownOpen}
                        toggle={toggleDropdown}
                    >
                        <DropdownToggle color='transparent' dark='true' caret>
                            <CgProfile />
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Option 1</DropdownItem>
                            <DropdownItem>Option 2</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Nav>
            )}
        </Navbar>
    )
}

export default Header

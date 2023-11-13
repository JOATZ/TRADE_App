import { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand
} from 'reactstrap'

import {
    isTermsAccepted,
    setCloseModal
} from '../features/termsConditions/termsSlice'
import UserLogin from '../features/users/UserLogin'
import {
    isLoginModalOpen,
    setLoginModalOpen
} from '../features/users/userSlice'
import tradeLogo from '../img/tradeLogoNoBg.png'

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const termsAccepted = useSelector(isTermsAccepted)

    const toggleDropdown = () => {
        setDropdownOpen((prevState) => !prevState)
    }

    const dispatch = useDispatch()

    const handleReOpenModal = () => {
        dispatch(setCloseModal(false))
    }

    const handleUserLoginModal = () => {
        dispatch(setLoginModalOpen(true))
    }

    return (
        <>
            <Navbar dark color='primary' sticky='top' expand='md'>
                <NavbarBrand className='mx-auto' href='/'>
                    <img src={tradeLogo} alt='T.R.A.D.E. Logo' />
                    <h1 className='mt-1'>
                        Trade Record Adaptation Data Engine
                    </h1>
                </NavbarBrand>
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
                            {!termsAccepted && (
                                <DropdownItem onClick={handleReOpenModal}>
                                    Accept Terms
                                </DropdownItem>
                            )}
                            {termsAccepted && (
                                <>
                                    <DropdownItem
                                        onClick={handleUserLoginModal}
                                    >
                                        User Login
                                    </DropdownItem>
                                    <DropdownItem>Option 2</DropdownItem>
                                </>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                </Nav>
            </Navbar>
            <UserLogin />
        </>
    )
}

export default Header

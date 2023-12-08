import { useState } from 'react'
import {
    isTermsAccepted,
    setCloseModal
} from 'features/termsConditions/termsSlice'
import UserLogin from 'features/users/UserLogin'
import { setLoginModalOpen } from 'features/users/userSlice'
import tradeLogo2 from 'img/tradeLogo2nbg.png'
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
import DarkMode from 'utils/darkMode'

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
            <Navbar dark sticky='top' expand='md'>
                <div className='mx-auto d-flex align-items-center justify-content-between'>
                    <NavbarBrand href='/'>
                        <img src={tradeLogo2} alt='T.R.A.D.E. Logo' />
                        <h1 className='mt-1'>
                            Trade Record Adaptation Data Engine
                        </h1>
                    </NavbarBrand>
                    <Dropdown
                        className='ms-auto'
                        isOpen={dropdownOpen}
                        toggle={toggleDropdown}
                    >
                        <DropdownToggle color='transparent' dark='true'>
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
                                    <DropdownItem>
                                        <DarkMode />
                                    </DropdownItem>
                                </>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </Navbar>
            <UserLogin />
        </>
    )
}

export default Header

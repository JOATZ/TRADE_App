import { useEffect } from 'react'
import Header from 'components/Header'
import AcceptTerms from 'features/termsConditions/AcceptTerms'
import {
    setCloseModal,
    setTermsAccepted
} from 'features/termsConditions/termsSlice'
import { setLoginModalOpen } from 'features/users/userSlice'
import HomePage from 'pages/HomePage'
import { useDispatch, useSelector } from 'react-redux'
import { selectDarkMode } from 'utils/darkMode'

import 'App.css'

function App() {
    const dispatch = useDispatch()
    const darkMode = useSelector(selectDarkMode)

    useEffect(() => {
        dispatch(setCloseModal(false))
        dispatch(setLoginModalOpen(false))
    }, [dispatch])

    return (
        <div className='App'>
            <AcceptTerms />
            <Header />
            <HomePage />
        </div>
    )
}

export default App

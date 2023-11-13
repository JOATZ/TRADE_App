import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Header from './components/Header'
import AcceptTerms from './features/termsConditions/AcceptTerms'
import {
    setCloseModal,
    setTermsAccepted
} from './features/termsConditions/termsSlice'
import { setLoginModalOpen } from './features/users/userSlice'

import './App.css'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTermsAccepted(false))
        dispatch(setCloseModal(false))
        dispatch(setLoginModalOpen(false))
    }, [dispatch])

    return (
        <div className='App'>
            <AcceptTerms />
            <Header />
        </div>
    )
}

export default App

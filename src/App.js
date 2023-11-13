import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { store } from './app/store'
import Header from './components/Header'
import AcceptTerms from './features/termsConditions/AcceptTerms'
import {
    setCloseModal,
    setTermsAccepted
} from './features/termsConditions/termsSlice'
import UserLogin from './features/users/UserLogin'
import { isLoginModalOpen, setLoginModalOpen } from './features/users/userSlice'

import './App.css'

function App() {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(setTermsAccepted(false))
        dispatch(setCloseModal(false))
        dispatch(setLoginModalOpen(false))
        console.log('dispatched login close');
    }, [dispatch])

    return (
        <div className='App'>
            <AcceptTerms />
            <Header />

        </div>
    )
}

export default App

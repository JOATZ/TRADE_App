import { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'

import { store } from './app/store'
import Header from './components/Header'
import AcceptTerms from './features/termsConditions/AcceptTerms'
import {
    setCloseModal,
    setTermsAccepted
} from './features/termsConditions/termsSlice'

import './App.css'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTermsAccepted(false))
        dispatch(setCloseModal(false))
    }, [dispatch])

    return (
        <div className='App'>
            <AcceptTerms />
            <Header />
        </div>
    )
}

export default App

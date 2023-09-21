import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import LoginModal from './components/LoginModal'
import TermsModal from './components/TermsModal'

import './App.css'

function App() {
    return (
        <div className='App'>
            <Header />
            <TermsModal />
            <LoginModal />
        </div>
    )
}

export default App

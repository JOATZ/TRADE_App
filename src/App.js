import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import LocalStorageListener from './components/LocalStorageListener'
import LoginModal from './components/LoginModal'
import TermsModal from './components/TermsModal'

import './App.css'

function App() {
    return (
        <div className='App'>
            <LocalStorageListener>
                {({ acceptedTerms, loggedIn }) => (
                    <>
                        <Header
                            acceptedTerms={acceptedTerms}
                            loggedIn={loggedIn}
                        />
                        <TermsModal acceptedTerms={acceptedTerms} />
                        {acceptedTerms && <LoginModal loggedIn={loggedIn} />}
                    </>
                )}
            </LocalStorageListener>
        </div>
    )
}

export default App

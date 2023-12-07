import { useEffect } from 'react'
import Header from 'components/Header'
import AcceptTerms from 'features/termsConditions/AcceptTerms'
import {
    setCloseModal,
    setTermsAccepted
} from 'features/termsConditions/termsSlice'
import { setLoginModalOpen } from 'features/users/userSlice'
import CompareData from 'pages/CompareData'
import DataManager from 'pages/DataManager'
import HomePage from 'pages/HomePage'
import TradeAnalysis from 'pages/TradeAnalysis'
import TradeLog from 'pages/TradeLog'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { selectDarkMode } from 'utils/darkMode'
import ResetButton from 'utils/resetState'

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
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/datamanager' element={<DataManager />} />
                <Route path='/tradelog' element={<TradeLog />} />
                <Route path='/tradeanalysis' element={<TradeAnalysis />} />
                <Route path='/comparedata' element={<CompareData />} />
            </Routes>
        </div>
    )
}

export default App

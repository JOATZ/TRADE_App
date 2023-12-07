import { useEffect } from 'react'
import Header from 'components/Header'
import AcceptTerms from 'features/termsConditions/AcceptTerms'
import { setCloseModal } from 'features/termsConditions/termsSlice'
import { setLoginModalOpen } from 'features/users/userSlice'
import CompareData from 'pages/CompareData'
import DataManager from 'pages/DataManager'
import HomePage from 'pages/HomePage'
import HomePageV2 from 'pages/HomePageV2'
import TradeAnalysis from 'pages/TradeAnalysis'
import TradeLog from 'pages/TradeLog'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
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
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/datamanager' element={<DataManager />} />
                <Route path='/tradelog' element={<TradeLog />} />
                <Route path='/tradeanalysis' element={<TradeAnalysis />} />
                <Route path='/comparedata' element={<CompareData />} />
                <Route path='/homepagev2' element={<HomePageV2 />} />
            </Routes>
        </div>
    )
}

export default App

import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { store } from './app/store'
import Header from './components/Header'

import './App.css'

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <Header />
            </div>
        </Provider>
    )
}

export default App

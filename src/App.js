import { Provider } from 'react-redux'

import { store } from './app/store'
import Header from './components/Header'
import AcceptTerms from './features/termsConditions/AcceptedTerms'

import './App.css'

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <AcceptTerms />
                <Header />
            </div>
        </Provider>
    )
}

export default App

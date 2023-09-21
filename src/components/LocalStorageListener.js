import { useEffect, useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
        const storedValue = localStorage.getItem(key)
        if (storedValue) {
            try {
                return JSON.parse(storedValue)
            } catch (error) {
                return defaultValue
            }
        } else {
            return defaultValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}

const LocalStorageListener = ({ children }) => {
    const [acceptedTerms, setAcceptedTerms] = useLocalStorage(
        'acceptedTerms',
        false
    )
    const [loggedIn, setLoggedIn] = useLocalStorage('loggedIn', false)

    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'acceptedTerms') {
                setAcceptedTerms(JSON.parse(e.newValue))
            }
            if (e.key === 'loggedIn') {
                setLoggedIn(JSON.parse(e.newValue))
            }
        }

        window.addEventListener('storage', handleStorageChange)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }
    }, [])

    return children({ acceptedTerms, loggedIn })
}

export default LocalStorageListener

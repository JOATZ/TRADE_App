//reset button for dev purposes
import { persistor, store } from 'app/store'

export const RESET_STATE = 'RESET_STATE'

function ResetButton() {
    const handleReset = () => {
        store.dispatch({ type: RESET_STATE })
        persistor.purge()
        localStorage.clear()
    }

    return <button onClick={handleReset}>Reset State</button>
}

export default ResetButton

// TermsMessage.js
import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'

import { setTermsAccepted } from '../features/termsConditions/termsSlice'

const TermsMessage = () => {
    const dispatch = useDispatch()

    const handleAcceptTerms = () => {
        dispatch(setTermsAccepted(true))
    }

    return (
        <div className='terms-required'>
            <p>You are required to accept the terms to use this site.</p>
            <Button color='btn btn-primary' onClick={handleAcceptTerms}>
                Accept Terms
            </Button>
        </div>
    )
}

export default TermsMessage

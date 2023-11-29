import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'

import { setCloseModal, setTermsAccepted } from './termsSlice'

const TermsMessage = () => {
    const dispatch = useDispatch()

    const handleReOpenModal = () => {
        dispatch(setCloseModal(false))
        dispatch(setTermsAccepted(false))
    }

    return (
        <div className='terms-required'>
            <p>You are required to accept the terms to use this site.</p>
            <Button color='btn btn-primary' onClick={handleReOpenModal}>
                Accept Terms
            </Button>
        </div>
    )
}

export default TermsMessage

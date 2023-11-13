import { useDispatch, useSelector } from 'react-redux'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

import TermsMessage from '../../components/TermsMessage'

import {
    isModalClosed,
    isTermsAccepted,
    setCloseModal,
    setTermsAccepted
} from './termsSlice'

const AcceptTerms = () => {
    const termsAccepted = useSelector(isTermsAccepted)
    const modalClosed = useSelector(isModalClosed)

    const dispatch = useDispatch()

    const handleAcceptTerms = () => {
        dispatch(setTermsAccepted(true))
        dispatch(setCloseModal(true))
    }

    const handleCloseModal = () => {
        dispatch(setCloseModal(true))
        dispatch(setTermsAccepted(false))
    }

    if (modalClosed && !termsAccepted) {
        return <TermsMessage />
    }
    return (
        <>
            <Modal
                className='terms-modal'
                isOpen={!termsAccepted}
                toggle={handleCloseModal}
                backdrop='static'
            >
                <ModalHeader
                    className='terms-modal-header'
                    toggle={handleCloseModal}
                >
                    Terms and Conditions
                </ModalHeader>
                <ModalBody>
                    By using this site, you agree to the following Terms and
                    Conditions:
                    <ol>
                        <li>
                            You are responsible for any data you upload to this
                            site.
                        </li>
                        <li>
                            We are not responsible for any data uploaded to this
                            site.
                        </li>
                        <li>
                            You agree not to upload any illegal or harmful data.
                            Please use this site responsibly.
                        </li>
                    </ol>
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={handleAcceptTerms}>
                        I Accept
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default AcceptTerms

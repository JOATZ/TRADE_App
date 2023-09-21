import { useEffect, useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const TermsModal = () => {
    const [showTermsModal, setShowTermsModal] = useState(false)
    const [userClosedModal, setUserClosedModal] = useState(false)

    useEffect(() => {
        const acceptedTerms = localStorage.getItem('acceptedTerms')
        if (!acceptedTerms) {
            setShowTermsModal(true)
        }
    }, [])

    const handleTermsModalClose = () => {
        setUserClosedModal(true)
        setShowTermsModal(false)
    }

    const handleAcceptTerms = () => {
        localStorage.setItem('acceptedTerms', true)
        setUserClosedModal(false)
        setShowTermsModal(false)
    }

    const reopenModal = () => {
        setShowTermsModal(true)
    }

    return (
        <>
            <Modal
                className='terms-modal'
                isOpen={showTermsModal}
                toggle={handleTermsModalClose}
                backdrop='static'
            >
                <ModalHeader
                    className='terms-modal-header'
                    toggle={handleTermsModalClose}
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
            {userClosedModal && !showTermsModal && (
                <div className='terms-required'>
                    <p>
                        You are required to accept the terms to use this site.
                    </p>
                    <Button color='btn btn-primary' onClick={reopenModal}>
                        Accept Terms
                    </Button>
                </div>
            )}
        </>
    )
}

export default TermsModal

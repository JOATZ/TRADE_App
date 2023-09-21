import { useEffect, useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const TermsModal = () => {
    const [showTermsModal, setShowTermsModal] = useState(false)

    useEffect(() => {
        const acceptedTerms = localStorage.getItem('acceptedTerms')
        if (!acceptedTerms) {
            setShowTermsModal(true)
        }
    }, [])

    const handleTermsModalClose = () => {
        localStorage.setItem('acceptedTerms', true)
        setShowTermsModal(false)
    }

    return (
        <Modal isOpen={showTermsModal} toggle={handleTermsModalClose}>
            <ModalHeader toggle={handleTermsModalClose}>
                Terms and Conditions
            </ModalHeader>
            <ModalBody>Please accept our terms and conditions...</ModalBody>
            <ModalFooter>
                <Button color='primary' onClick={handleTermsModalClose}>
                    I Accept
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default TermsModal

import { useEffect, useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import {
    Button,
    Col,
    FormGroup,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
} from 'reactstrap'

const LoginModal = () => {
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [acceptedTerms, setAcceptedTerms] = useState(
        localStorage.getItem('acceptedTerms')
    )

    useEffect(() => {
        const loggedIn = localStorage.getItem('loggedIn')
        const acceptedTerms = localStorage.getItem('acceptedTerms')
        if (acceptedTerms && !loggedIn) {
            setShowLoginModal(true)
        }
    }, [acceptedTerms])

    const handleLoggedIn = () => {
        localStorage.setItem('loggedIn', true)
        setShowLoginModal(false)
    }

    return (
        <>
            <Modal
                className='login-modal'
                isOpen={showLoginModal}
                toggle={handleLoggedIn}
                backdrop='static'
            >
                <ModalHeader className='login-modal-header'>
                    User Login
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            userName: '',
                            passWord: '',
                        }}
                        //onSubmit={handleLogin  do later}
                    >
                        <Form>
                            <FormGroup row>
                                <Col>
                                    <Label htmlFor='userName'>
                                        {'  '}
                                        Username
                                    </Label>
                                    <Field
                                        name='userName'
                                        placeholder='Not currently Submitting anything.'
                                        className='form-control login-form-box'
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col>
                                    <Label htmlFor='password'>
                                        {'  '}
                                        Password
                                    </Label>
                                    <Field
                                        name='password'
                                        placeholder='Simply press LOGIN to login.'
                                        className='form-control login-form-box'
                                    />
                                </Col>
                            </FormGroup>
                        </Form>
                    </Formik>
                </ModalBody>
                <ModalFooter>
                    <Button className='primary' onClick={handleLoggedIn}>
                        Login
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default LoginModal

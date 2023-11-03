import { useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import {
    Button,
    Col,
    FormGroup,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from 'reactstrap'

import { selectCurrentUser, setCurrentUser } from './userSlice'

const UserLogin = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false)

    const currentUser = useSelector(selectCurrentUser)

    const dispatch = useDispatch()

    const handleLogin = (values) => {
        const currentUser = {
            id: Date.now(),
            username: values.username,
            password: values.password
        }
        dispatch(setCurrentUser(currentUser))
        setLoginModalOpen(false)
    }

    return (
        <Modal
            className='login-modal'
            isOpen={loginModalOpen}
            backdrop='static'
        >
            <ModalHeader
                toggle={() => setLoginModalOpen(false)}
                className='login-modal-header'
            >
                User Login
            </ModalHeader>
            <ModalBody>
                <Formik
                    initialValues={{
                        userName: '',
                        passWord: ''
                    }}
                    onSubmit={handleLogin}
                    //validate later---- validate={validateUserLogin}
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
                <Button type='submit' className='primary'>
                    Login
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default UserLogin

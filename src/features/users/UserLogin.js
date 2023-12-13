import { useEffect, useState } from 'react'
import {
    isLoginModalOpen,
    selectCurrentUser,
    setCurrentUser,
    setLoginModalOpen
} from 'features/users/userSlice'
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

const UserLogin = () => {
    const loginModalOpen = useSelector(isLoginModalOpen)
    const currentUser = useSelector(selectCurrentUser)

    const dispatch = useDispatch()

    const handleLogin = (values) => {
        const currentUser = {
            id: Date.now(),
            username: values.username,
            password: values.password
        }
        dispatch(setCurrentUser(currentUser))
        dispatch(setLoginModalOpen(false))
    }
    return (
        <Modal
            className='login-modal'
            isOpen={loginModalOpen}
            backdrop='static'
        >
            <ModalHeader
                className='login-modal-header'
                toggle={() => dispatch(setLoginModalOpen(false))}
            >
                User Login
            </ModalHeader>
            <Formik
                initialValues={{
                    userName: '',
                    passWord: ''
                }}
                onSubmit={handleLogin}
                //validate later---- validate={validateUserLogin}
            >
                <Form>
                    <ModalBody>
                        <FormGroup row>
                            <Col>
                                <Label htmlFor='userName'>Username</Label>
                                <Field
                                    name='userName'
                                    placeholder='Not currently Submitting anything.'
                                    className='form-control login-form-box'
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col>
                                <Label htmlFor='password'>Password</Label>
                                <Field
                                    name='password'
                                    placeholder='Simply press LOGIN to login.'
                                    className='form-control login-form-box'
                                />
                            </Col>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            type='submit'
                            style={{
                                backgroundColor: 'transparent',
                                border: 'white solid 3px',
                                boxShadow: '0px 0px 10px white'
                            }}
                        >
                            Login
                        </Button>
                    </ModalFooter>
                </Form>
            </Formik>
        </Modal>
    )
}

export default UserLogin

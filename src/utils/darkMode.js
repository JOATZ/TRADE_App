import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, FormGroup, Input, Label } from 'reactstrap'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkMode: false
}

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        setDarkMode: (state, action) => {
            state.darkMode = action.payload
        }
    }
})

const { setDarkMode } = darkModeSlice.actions
const selectDarkMode = (state) => state.mode.darkMode

function DarkMode(props) {
    const darkMode = useSelector(selectDarkMode)
    const dispatch = useDispatch()

    const handleSwitch = (event) => {
        dispatch(setDarkMode(event.target.checked))
    }

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <Form>
            <FormGroup switch>
                <Input
                    type='switch'
                    role='switch'
                    checked={darkMode}
                    onChange={handleSwitch}
                />
                <Label check>Default switch checkbox input</Label>
            </FormGroup>
        </Form>
    )
}

export default DarkMode
export { darkModeSlice, selectDarkMode }

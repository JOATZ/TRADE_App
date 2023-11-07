import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    termsAccepted: false,
    modalClosed: false
}

const termsSlice = createSlice({
    name: 'terms',
    initialState,
    reducers: {
        setTermsAccepted: (state, action) => {
            state.termsAccepted = action.payload
        },
        setCloseModal: (state, action) => {
            state.modalClosed = action.payload
        }
    }
})

export const { setTermsAccepted, setCloseModal } = termsSlice.actions

export const isTermsAccepted = (state) => state.terms.termsAccepted
export const isModalClosed = (state) => state.terms.modalClosed

export const termsReducer = termsSlice.reducer

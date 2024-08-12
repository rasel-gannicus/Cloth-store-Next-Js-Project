import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    modalStatus : false ,
    modalVariant : null 
}


const modalSlice =  createSlice({
    name : 'modalSlice',
    initialState,
    reducers : {
        activeModal : (state, action) => {
            state.modalStatus = true ;
        },

        closeModal : (state, action) => {
            state.modalStatus = false 
        }
    }
})



export const { activeModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
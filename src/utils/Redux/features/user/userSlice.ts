import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user : {
        name : '',
        email : '',
        image : '' 
    }
}

const userSlice = createSlice({
    name : 'userSlice',
    initialState,
    reducers : {
        addUserToRedux : (state, action) => {
            state.user = action?.payload ;
        },
        // addNewSession : (state, action) => {
        //     state.userSession = action.payload
        // }
    }
})



export const { addUserToRedux } = userSlice.actions;
export default userSlice.reducer;
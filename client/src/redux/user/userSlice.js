import { createSlice } from "@reduxjs/toolkit"; 



const initialState = {
    currentUser: null,
    loading: false,
    error: null,};
    const userSlice = createSlice({
    name: "user",   
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = null;
        },
        SignInFailure: (state, action) =>{
            state.error = action.payload;
            state.loading = false;

        }
    }
});
export const {signInStart, signInSuccess, SignInFailure} = userSlice.actions;
export default userSlice.reducer;

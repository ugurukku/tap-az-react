import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
        username:'ugur',
        email:'',
        password:'',
    },
	reducers: {
	},
});
export default authSlice.reducer;
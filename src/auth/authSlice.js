import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        id: '',
        username: '',
        email: '',
        password: '',
    },
    reducers: {
        setAuth: (state, userInfo) => {
            console.log(userInfo.payload);
            const newAuth = {
                id: userInfo.payload.id,
                username: userInfo.payload.username,
                email: userInfo.payload.email,
                password: userInfo.payload.password
            };
            state.id = newAuth.id;
            state.email = newAuth.email;
            state.password = newAuth.password;
            state.username = newAuth.username;

            localStorage.setItem("user",JSON.stringify(newAuth));
            console.log(newAuth);
        },
    },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
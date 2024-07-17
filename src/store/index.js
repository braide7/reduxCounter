import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import counterReducer from './counter'

const store = configureStore({
    reducer: {counter: counterReducer, auth: authReducer}
});

export default store;


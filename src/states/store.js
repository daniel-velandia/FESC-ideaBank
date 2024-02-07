import {configureStore} from "@reduxjs/toolkit";
import rootReducer from './userReducer';
import pageReducer from "./pageReducer";

const store = configureStore({
    reducer: {
        user: rootReducer,
        page: pageReducer
    }
});

export { store };
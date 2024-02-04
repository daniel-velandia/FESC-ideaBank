import {configureStore} from "@reduxjs/toolkit";
import rootReducer from './userReducer';
import projectReducer from "./projectReducer";

const store = configureStore({
    reducer: {
        user: rootReducer,
        project: projectReducer
    }
});

export { store };
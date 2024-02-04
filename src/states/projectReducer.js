import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isNeededRefresh: false,
}

const projectReducer = createSlice({
    name: 'projectPage',
    initialState,
    reducers: {
        refresh: (state, action) => {
            state.isNeededRefresh = action.payload.isNeededRefresh
        }
    }
});

export const { refresh } = projectReducer.actions;
export default projectReducer.reducer;
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id: "",
}

const uploadFileReducer = createSlice({
    name: 'uploadFile',
    initialState,
    reducers: {
        upload: (state, action) => {
            state.id = action.payload.id
        }
    }
});

export const { upload } = uploadFileReducer.actions;
export default uploadFileReducer.reducer;
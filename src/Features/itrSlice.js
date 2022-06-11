import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itr: {
        
    }
}

export const itrSlice = createSlice({
    name: 'itr',
    initialState,
    reducers: {
        incomeFromSalary : (state) => {
            console.log(state)
             state.itr = state.itr
        }
    }
})

export const {incomeFromSalary } = itrSlice.actions
export default itrSlice.reducer
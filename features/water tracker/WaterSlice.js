import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0
}

export const waterSlice = createSlice({
    name: 'counter',
    initialState,
    reducer:{
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            if ( state > 0 ) {
                state.value -= 1;
            } else {
                Alert.alert('You cannot have less than 0 waters a day.');
            }
        } 
    }
})

export default waterReducer = waterSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import waterReducer from '../features/water tracker/WaterSlice';

export const store = configureStore ({
    reducer:{
        water: waterReducer
    }
})
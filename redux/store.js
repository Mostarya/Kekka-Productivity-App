import { configureStore } from '@reduxjs/toolkit';
import { 
    persistStore, persistCombineReducers, 
    FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER  
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
//Reducers
import waterReducer from '../features/water tracker/WaterSlice';

const config = {
    key: 'root',
    storage: AsyncStorage,
    debug: true
}

export const store = configureStore ({
    reducer:persistCombineReducers(config, {
        water: waterReducer,
    }),
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER
            ]
        }
    })
})

export const persistor = persistStore(store);
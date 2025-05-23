import { exampleSlice } from './slice/exampleSlice';
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import { reduxStorageAsyncStorage } from '../Config/ReduxStorage';

const persitConfig = {
    key: 'root',
    storage: reduxStorageAsyncStorage,
};

const rootReducer = combineReducers({
    example: exampleSlice.reducer,
});

const persistedReducer = persistReducer(persitConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);


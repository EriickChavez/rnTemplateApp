import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { persistor, store } from './Store/store';


interface AppProviderProps extends React.PropsWithChildren { }

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                </PersistGate>
            </Provider>
        </NavigationContainer>
    );
};

export default AppProvider;

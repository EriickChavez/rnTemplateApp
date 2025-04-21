import AppProvider from '@/AppProvider';
import MainNavigation from '@/Navigation/MainNavigation';
import React from 'react';


interface AppProps { }

const App: React.FC<AppProps> = ({ }) => {
  return (
    <AppProvider>
      <MainNavigation />
    </AppProvider>
  );
};


export default App;

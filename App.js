import React from 'react';
import AppNavigation from './src/config/Navigation';
import {NativeBaseProvider} from 'native-base';
const App = () => {
  return (
    <>
      <NativeBaseProvider>
        <AppNavigation />
      </NativeBaseProvider>
    </>
  );
};

export default App;

import React from 'react';
import ModalProvider from './context/ModalContex';
import HomeScreen from './Screens/HomeScreen';
import GlobalStyle from './styles/global';


function App() {
  return (
      <ModalProvider>
        <GlobalStyle/>
        <HomeScreen />
      </ModalProvider>
  );
}

export default App;

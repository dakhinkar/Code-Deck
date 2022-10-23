import React from 'react';
import FolderProvider from './context/FolderContex';
import ModalProvider from './context/ModalContex';
import HomeScreen from './Screens/HomeScreen';
import GlobalStyle from './styles/global';


function App() {
  return (
      <FolderProvider>
        <ModalProvider>
          <GlobalStyle/>
          <HomeScreen />
        </ModalProvider>
      </FolderProvider>
  );
}

export default App;

import React from 'react';
import FolderProvider from './context/PlaygroundContex';
import ModalProvider from './context/ModalContex';
import HomeScreen from './Screens/HomeScreen';
import GlobalStyle from './styles/global';

import {Route, Routes, Navigate,BrowserRouter} from 'react-router-dom'
import Playground from './Screens/playground/index';

function App() {
  return (
      <FolderProvider>
        <ModalProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/code/:folderId/:playgroundId' element={<Playground />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </BrowserRouter>
        </ModalProvider>
      </FolderProvider>
  )
}

export default App;

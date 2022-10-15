
import React, { useContext } from 'react'
import LeftPane from './LeftPane'
import RightPane from './RightPane'
import Modal from '../../Components/Modal';
import styled from 'styled-components';
import { ModalContext } from '../../context/ModalContex';

const HomeScreenContainer = styled.div`
  position : relative;
  width: 100%;
  height: 100vh;
`;


const HomeScreen = () => {
  const modalFeature = useContext(ModalContext);
  const  isOpen = modalFeature?.isOpen;
  return <HomeScreenContainer>
    <LeftPane />
    <RightPane/>
    {isOpen && <Modal />}
  </HomeScreenContainer>

}

export default HomeScreen


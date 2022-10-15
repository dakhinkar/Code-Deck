
import React, { useContext } from 'react';
import styled from 'styled-components';
import { RiCloseFill } from 'react-icons/ri';
import { ModalContext } from '../context/ModalContex';
 
const ModalContainer = styled.div`
    background: rgba(0,0,0,0.4);
    width: 100%;
    height: 100%;
    position : fixed;
    top: 0;
    left: 0;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContanet = styled.div`
    background: white;
    width: 35%;
    // height: 20%;
    padding: 2rem;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CloseButton = styled.button`
    background: transparent;
    outline:0;
    border: 0;
    font-size: 2rem;
    cursor: pointer;
`;

const Modal = () => {
    const modalFeature = useContext(ModalContext);
    const setIsOpen = modalFeature?.setIsOpen;


  return (
      <ModalContainer>
          <ModalContanet>
              <Header>
                  <h2>Upated folder name </h2>
                  <CloseButton onClick={() => {
                      if (setIsOpen) setIsOpen(false)
                  }}><RiCloseFill/></CloseButton>
              </Header>
          </ModalContanet>
    </ModalContainer>
  )
}

export default Modal;

import React, {useContext} from 'react'
import { Header, CloseButton } from '../Modal';
import { RiCloseFill } from 'react-icons/ri';
import { ModalContext } from '../../context/ModalContex';
const EditFolder = () => {
const modalFeature = useContext(ModalContext)!;
    const {isOpen, closeModal} = modalFeature;
  return (
    <Header>
        <h2>EditFolder </h2>
        <CloseButton onClick={() => { closeModal() }}>
              <RiCloseFill />
        </CloseButton>
    </Header>
   
  )
}

export default EditFolder

import React, { useContext } from 'react';
import styled from 'styled-components';
import { RiCloseFill } from 'react-icons/ri';
import { ModalContext } from '../context/ModalContex';
import { FolderContext } from '../context/FolderContex';
 
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
    padding-top: 1.5rem;
    border-radius: 5px;
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

const Input = styled.div`
    display : flex;
    align-item: center;
    justify-content: space-between;
    padding : 0.5rem 0;
    padding-bottom: 0;
    gap: 2rem;
    input{
        height: 1.75rem;
        flex-grow: 1;
        outline: none;
        padding: 0.5rem;
    }
    button{
        height: 1.75rem;
        border : none;
        background-color : #4936e9d6;
        padding: 0 1rem;
        color: white;
        border-radius: 5px;
        font-weight: 400;
        cursor: pointer;

        &:hover{
          background-color : blue;  
        }
    }
`;

const EditModal = ({ setIsOpen, isOpen, folders }: { setIsOpen: any, isOpen: any, folders:any }) => {
    const folder = folders[isOpen.indentifier.folderId];
    const cardName = folder["items"][isOpen.indentifier.cardId];

    return (
        <>
            <Header>
                <h2>Upated folder name </h2>
                <CloseButton onClick={
                    () => {
                    setIsOpen(
                          {
                              popup: false,
                              type: "",
                              indentifier: {
                                  folderId: "",
                                  cardId: ""
                              }
                          }
                        )
                    }}>
                      <RiCloseFill />
                </CloseButton>
            </Header>
            <Input>
                <input type="text" value={cardName.title} />
                <button>Save Changes</button>
            </Input>
        </>
    )

}

const AddModal =  ({setIsOpen , isOpen }: {setIsOpen: any, isOpen: any}) => {
    return (
        <Header>
                <h2>Add new folder</h2>
                <CloseButton onClick={() => {
                    setIsOpen(
                          {
                              popup: false,
                              type: "",
                              indentifier: {
                                  folderId: "",
                                  cardId: ""
                              }
                          }
                        )
                    }}>
                      <RiCloseFill />
                </CloseButton>
        </Header>
    )
}


const OthersModal = () => {
    return <div>Others Modal</div>
}
const Modal = () => {
    const FolderFeature = useContext(FolderContext)!;
    const { folders, setFolders } = FolderFeature;
    const modalFeature = useContext(ModalContext)!;
    const {isOpen, setIsOpen} = modalFeature;

    return (
      <ModalContainer>
          <ModalContanet>
            {isOpen.type === "card-edit" && <EditModal setIsOpen = { setIsOpen} isOpen={isOpen} folders={folders} />}
             {isOpen.type === "card-new" && <AddModal setIsOpen = { setIsOpen} isOpen={isOpen} />}  
            
          </ModalContanet>
    </ModalContainer>
  )
}

export default Modal;
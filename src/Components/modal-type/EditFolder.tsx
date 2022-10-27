import React, {useContext, useState} from 'react'
import { Header, CloseButton, Input } from '../Modal';
import { RiCloseFill } from 'react-icons/ri';
import { ModalContext } from '../../context/ModalContex';
import { PlaygroundContext } from '../../context/PlaygroundContex';
const EditFolder = () => {
  const modalFeature = useContext(ModalContext)!;
  const { isOpen, closeModal } = modalFeature;
  const FolderFeature = useContext(PlaygroundContext)!;
  const { editFolderTitle, folders } = FolderFeature;
  const { folderId } = isOpen.indentifier;
  
  const [title, setTitle] = useState<string>(folders[folderId].title);

  const UpdateHandler = () => {
    editFolderTitle(folderId, title);
    closeModal();
  }
  return (
    <>
      <Header>
        <h2>Edit folder title </h2>
        <CloseButton onClick={() => { closeModal() }}>
              <RiCloseFill />
        </CloseButton>
      </Header>
      <Input>
        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />
        <button onClick={UpdateHandler}>Upate title</button>
      </Input>

   </>
  )
}

export default EditFolder
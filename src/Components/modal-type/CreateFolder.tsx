import React,{useState, useContext} from 'react';
import { Header, CloseButton, Input } from '../Modal';
import { RiCloseFill } from 'react-icons/ri';
import { ModalContext } from '../../context/ModalContex';
import { PlaygroundContext } from '../../context/PlaygroundContex';
const CreateFolder = () => {
  const FolderFeature = useContext(PlaygroundContext)!;
  const ModalFeature = useContext(ModalContext)!;
  const { closeModal } = ModalFeature;
  const { createNewFolder, folders } = FolderFeature;
  
  const [title, setTitle] = useState<string>("");

  const CreateHandler = () => {
    if (title.trim().length > 0) {
      createNewFolder(title);
       closeModal();
    }
      
   
  }
  return (
    <>
      <Header>
        <h2>Create New Folder </h2>
        <CloseButton
          onClick={() => { closeModal() }}>
              <RiCloseFill />
        </CloseButton>
      </Header>
      <Input>
        <input
          type="text"
          placeholder='Enter folder name'
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <button type='submit' onClick={CreateHandler}>Create</button>
      </Input>

   </>
  )
}


export default CreateFolder;


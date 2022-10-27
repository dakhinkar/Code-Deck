import React,{useState, useContext} from 'react';
import { Header, CloseButton, Input } from '../Modal';
import { RiCloseFill } from 'react-icons/ri';
import { ModalContext } from '../../context/ModalContex';
import { PlaygroundContext } from '../../context/PlaygroundContex';
const EditPlayground = () => {
  const modalFeature = useContext(ModalContext)!;
  const { isOpen, closeModal } = modalFeature;
  const FolderFeature = useContext(PlaygroundContext)!;
  const { editPlaygroundTitle, folders } = FolderFeature;
  const { folderId, cardId } = isOpen.indentifier;
  
  const [title, setTitle] = useState<string>(folders[folderId].items[cardId].title);

  const UpdateHandler = () => {
    editPlaygroundTitle(folderId, cardId, title);
    closeModal();
  }
  return (
    <>
      <Header>
        <h2>Edit playground title </h2>
        <CloseButton
          onClick={() => { closeModal() }}>
              <RiCloseFill />
        </CloseButton>
      </Header>
      <Input>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <button onClick={UpdateHandler}>Upate title</button>
      </Input>

   </>
  )
}


export default EditPlayground;
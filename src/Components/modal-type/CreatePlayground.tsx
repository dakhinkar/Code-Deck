import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Header, CloseButton } from '../Modal';
import { RiCloseFill } from 'react-icons/ri';
import { ModalContext } from '../../context/ModalContex';
import { PlaygroundContext } from '../../context/PlaygroundContex';
import { languageOptions } from '../../Screens/playground/Editor';
import Select from 'react-select';


const Input = styled.div`
    display : flex;
    flex-direction: column;
    align-item: center;
    justify-content: space-between;
    padding : 0.5rem 0;
    padding-bottom: 0;
    gap: 2rem;

    .inputContainer{
      display : flex;
      align-item: center;
      justify-content: space-between;
      gap: 1rem;
      input{
        
        
        flex-grow: 1;
        outline: none;
        padding: 0.5rem;
      }
      .inputT{
        height: 2.2rem;
      }
      .select{
        width: 8rem;
        height: 1.75rem;
      }

    }
    
    button{
        height: 2.5rem;
        border : none;
        background-color : #4936e9d6;
        padding: 0 1rem;
        color: white;
        border-radius: 5px;
        font-weight: 500;
        font-size: 1rem;
        cursor: pointer;

        &:hover{
          background-color : blue;  
        }
    }
`;

const CreatePlayground = () => {
  const FolderFeature = useContext(PlaygroundContext)!;
  const ModalFeature = useContext(ModalContext)!;
  const { closeModal, isOpen } = ModalFeature;
  const { folderId } = isOpen.indentifier;
  const { createNewPlayground, folders } = FolderFeature;
  
  const [title, setTitle] = useState<string>("");
  const [langauge, setLangauge] = useState<{ value: string, label: string }>(languageOptions[0]);
  
  const langaugeChangeHandler = (select: any) => {
    setLangauge(select);
  }
  const CreateHandler = () => {
    if (title.trim().length > 0) {
      createNewPlayground(folderId, title, langauge.value );
       closeModal();
    }
      
   
  }
  return (
    <>
      <Header>
        <h2>Create New Playground </h2>
        <CloseButton
          onClick={() => { closeModal() }}>
              <RiCloseFill />
        </CloseButton>
      </Header>
      <Input>
        <div className='inputContainer'>
          <input 
            className='inputT'
          type="text"
          placeholder='Enter playground title'
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
          <Select 
            className='select'
          value={langauge}
          options={languageOptions}
          onChange={langaugeChangeHandler}
          />
        </div>
        <button type='submit' onClick={CreateHandler}>Create</button>
      </Input>

   </>
  )
}


export default CreatePlayground
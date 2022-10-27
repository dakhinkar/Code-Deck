
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
      flex-direction: column;
      align-item: center;
      justify-content: space-between;
      gap: 1rem;
      input{
        width: 15rem;
        outline: none;
        padding: 0.5rem;
      }
      .select{
        width: 10rem;
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

const CreateFolderAndPlayground = () => {
  const FolderFeature = useContext(PlaygroundContext)!;
  const ModalFeature = useContext(ModalContext)!;
  const { closeModal } = ModalFeature;
  const { createNewFolderAndPlayground } = FolderFeature;
  
    const [folderTitle, setFolderTitle] = useState<string>("");
    const [playgoundTitle, setPlaygroundTitle] = useState<string>("");
  const [langauge, setLangauge] = useState<{ value: string, label: string }>(languageOptions[0]);
  
  const langaugeChangeHandler = (select: any) => {
    setLangauge(select);
  }
  const CreateHandler = () => {
    if (folderTitle.trim().length > 0 && playgoundTitle.trim().length > 0 ) {
      createNewFolderAndPlayground(folderTitle, playgoundTitle, langauge.value);
       closeModal();
    }
      
   
  }
  return (
    <>
      <Header>
        <h2>Create Folder & Playground</h2>
        <CloseButton
          onClick={() => { closeModal() }}>
              <RiCloseFill />
        </CloseButton>
      </Header>
        <Input>
            <div className='inputContainer'>
                <input 
                    type="text"
                    placeholder='Enter folder title'
                    value={folderTitle}
                    onChange={(e) => setFolderTitle(e.target.value)} />
                <input 
                    type="text"
                    placeholder='Enter playground title'
                    value={playgoundTitle}
                    onChange={(e) => setPlaygroundTitle(e.target.value)} />
                <Select 
                    className='select'
                    value={langauge}
                    options={languageOptions}
                    onChange={langaugeChangeHandler}/>
            </div>
        <button type='submit' onClick={CreateHandler}>Create</button>
      </Input>

   </>
  )
}

export default CreateFolderAndPlayground;
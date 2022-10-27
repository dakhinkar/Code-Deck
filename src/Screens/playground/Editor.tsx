import React, { useContext, useState } from "react";
import styled from "styled-components";
import CodeEditor from "./CodeEditor";
import { VscEdit } from "react-icons/vsc";
import { BsFullscreen } from 'react-icons/bs';
import {CgImport, CgExport} from 'react-icons/cg'
import Select from 'react-select';
import { ModalContext } from "../../context/ModalContex";
import { useParams } from "react-router-dom";
import { PlaygroundContext } from "../../context/PlaygroundContex";



const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;

  & > div: nth-of-type(2){
    height: calc(100vh - 12.5rem);
  }
  `;

const UpperToolBar = styled.div`
  height: 4rem; 
  display: flex;
  align-items:center;
   justify-content: space-between;
  padding: 0 0.9rem;
`;

const Title = styled.div`
  display:flex;
  align-items: center;
 
  font-weight: 400;
  gap: 0.3rem;
  h2{
    font-size: 1.3rem;
     font-weight: 400;
  }
  svg{
    font-size: 1rem;
  }
  
`;

const Tools = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > div{
    width: 10rem;
  }
`;

const LowerToolBar = styled.div`
  height: 4rem; 
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 0 0.9rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline:none;
  gap: 8px;
  font-size: 1.1rem;
  font-weight: 400;
  background-color: transparent;

  svg{
    font-size: 1rem;
  }
`;

const RunCode = styled.button`
  background-color: #1ab2e0d6;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.5rem 0.9rem;
  border: none;
  outline:none;
  border-radius: 2rem;
  &:hover{
     background-color: rgba(90, 204, 224, 0.89);
  }
`;

export const languageOptions = [
  { value: "c++", label: "C++" },
  { value: "java", label: "Java" },
  { value: "javaScript", label: "JavaScript" },
  { value: "python", label: "Python" },
   { value: "php", label: "PHP" }
];
export const modeOptions = [
  { value: "bespin", label: "Bespin" },
  { value: "darcula", label: "Darcula" },
  { value: "duotoneLight", label: "DuotoneLight" },
  { value: "duotoneDark", label: "DuotoneDark" },
  { value: "githubLight", label: "GithubLight" },
  { value: "githubDark", label: "GithubDark" },
  { value: "okaidia", label: "Okaidia" }
];


const Editor = () => {

  const [language, setLanguage] = useState<{value: string, label: string}>(languageOptions[0]);
  const [mode, setMode] = useState(modeOptions[0]);

  const languageChangeHandler = (selected: any) => {
    setLanguage(selected);
  }
    const modeChangeHandler = (selected: any) => {
    setMode(selected);
  }

  const { folderId , playgroundId } = useParams();
  const ModalFeature = useContext(ModalContext)!;
  const FolderFeature = useContext(PlaygroundContext)!;
  const { folders} = FolderFeature;
  const {openModal } = ModalFeature;
  return( <EditorContainer>
    <UpperToolBar>
        <Title >
        <h2>{folders[folderId as string ].items[playgroundId as string ].title} </h2>
          <VscEdit
            onClick={() => {
              console.log("user");
              openModal({
                popup: true,
                type: "4",
                indentifier: {
                  folderId: folderId as string,
                  cardId: playgroundId as string
                }
              })
            }
      }/>
      </Title>
      
      <Tools>
        <Select
          value={language}
          options={languageOptions}
          onChange={languageChangeHandler}/>
        <Select
          value={mode}
          options={modeOptions}
          onChange={modeChangeHandler}/>
      </Tools>
    </UpperToolBar>
    <CodeEditor />
    <LowerToolBar>
      <ButtonGroup>
        <Button> <BsFullscreen/>  <span>Full Screen </span></Button>
        <Button> <CgImport/>  <span>Import code </span> </Button>
        <Button> <CgExport/> <span>Export code</span> </Button>
       
      </ButtonGroup>
      <RunCode>
        Run code
      </RunCode>
    </LowerToolBar>
  </EditorContainer>
  )
}

export default Editor;

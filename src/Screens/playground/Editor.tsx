import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CodeEditor from "./CodeEditor";
import { VscEdit } from "react-icons/vsc";
import { BsFullscreen } from 'react-icons/bs';
import {CgImport, CgExport} from 'react-icons/cg'
import Select from 'react-select';
import { ModalContext } from "../../context/ModalContex";
import { useParams } from "react-router-dom";
import { PlaygroundContext } from "../../context/PlaygroundContex";
import axios from "axios";
import { readFileContent, writeFile, getNewFileHandle} from './fs-helper';
// import { Buffer, TypedArrays } from '@react-frontend-developer/buffers';
import { Buffer } from "buffer";

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;

  & > div:nth-of-type(2){
    height: calc(100vh - 12.5rem);
  }`;

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

// Import code, testcases
const ImportCode = styled.label`
  display: flex;
  align-items: center;
  border: none;
  outline:none;
  gap: 8px;
  font-size: 1.1rem;
  font-weight: 400;
  background-color: transparent;
  cursor: pointer;
  svg{
    font-size: 1rem;
  }
  input{
    display: none;
  }

`
// Save code button
const SaveCode = styled.button`
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

const RunCode = styled.button`
  background-color: #1ab2e0d6;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.5rem 0.9rem;
  border: none;
  outline:none;
  border-radius: 2rem;
  cursor: pointer;
  &:hover{
     background-color: rgba(90, 204, 224, 0.89);
  }
`;

export const languageOptions = [
  { value: "c++", label: "C++" },
  { value: "java", label: "Java" },
  { value: "javascript", label: "JavaScript" },
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
// default code for each language choose;

interface defaltCodeMap{
  [key: string]: {
    id:number,
    defaultCode: string;
  }
}
const initialCode : defaltCodeMap = {
  ["c++"]: {
    id: 4,
    defaultCode: "#include <iostream>\nusing namespace std;\n\nint main(){}"
  },
  ["java"]: {
    id: 62,
    defaultCode: `import java.util.*;\n class Main{\n\t public static void main(String[] args){\n\n\t}\n}`
  },
  ["javascript"]: {
    id: 63,
    defaultCode: "console.log('javascroipt')"
  },
  ["python"]: {
    id: 71,
    defaultCode:'printf("python")'
  },
  ["php"]: {
    id: 68,
    defaultCode:""
  }
}

interface EditorProps{
  testCase: string,
  outputHandler: ({color, message}:{color : string, message:string}) => void
}

const Editor: React.FC<EditorProps> = ({testCase, outputHandler}) => {

  // take folderId and cardId from url params 
  const { folderId, playgroundId } = useParams();
  
  // modal for editing playground title and loading 
  const ModalFeature = useContext(ModalContext)!;
  const FolderFeature = useContext(PlaygroundContext)!;
  //  get folders , saveCode , from Folderfeatures
  const { folders, saveCode } = FolderFeature;

  const {title, language, code } = folders[folderId as string].items[playgroundId as string];


  const {openModal,closeModal } = ModalFeature;

  // set langauge and theam from dropdown select
  const [currentLanguage, setLanguage] = useState<{ value: string, label: string }>(() => {
    for (let i = 0; i < languageOptions.length; i++){
      if (language === languageOptions[i].value) {
        return languageOptions[i];
      }
    }
    return languageOptions[0]; // default langauge set
  });

  // set theam 
  const [theamMode, setTheamMode] = useState(modeOptions[0]);

  //  set the code 
  const [currentCode, setCurrentCode] = useState(() => {
   
    if (code.length > 0) {
      return code;
    }
    return initialCode[currentLanguage.value].defaultCode; 
  });
  
  // change langauge function
  const languageChangeHandler = (selected: any) => {
    setLanguage(selected);
  }
  // change theam function
    const modeChangeHandler = (selected: any) => {
      setTheamMode(selected);
  }

  // code change update

  const codeChangeHandler = (selected: string) => {
    setCurrentCode(selected);
  }

  // Save code
  const saveCodeHandler = () => {
    saveCode(folderId as string, playgroundId as string, currentLanguage.value, currentCode);
  }

  // convert base64 string into readable string
  const decode = (inputStr: string):string => {
    return Buffer.from(inputStr, 'base64').toString('binary');
  }
  //  convert string into base64
  const encode = (inputStr : string) : string => {
   return Buffer.from(inputStr, 'binary').toString('base64');
  }
//  Get token from judge 0
  const getToken = async () : Promise<any>  => {
    const inputStd = encode(testCase);
    const source_code = encode(currentCode);
    const langCode = initialCode[currentLanguage.value].id;
    const data = JSON.stringify({
      'language_id': langCode, 'source_code': source_code,'stdin': inputStd
    })
    const options = {
        method: 'POST',
        url: 'https://judge0-ce.p.rapidapi.com/submissions',
        params: {base64_encoded: 'true', fields: '*'},
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': 'a284354b35mshbea3673d4eaa7c9p14ae7fjsn7da9afc96d14',
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        },
        data: data
    };

    const result = await axios.request(options).then(response => response.data).catch(err => err);
    return result;
  }

  // get base 64 output 
  const getOutput = async (token: string): Promise<any>=> {
          const options = {
            method: 'GET',
            url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
            params: {base64_encoded: 'true', fields: '*'},
            headers: {
              'X-RapidAPI-Key': 'a284354b35mshbea3673d4eaa7c9p14ae7fjsn7da9afc96d14',
              'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
            }
          };

          
      const result = await axios.request(options).then(res => res.data).catch(err => err);
    return result;
  } 

  // Run Code

  const runCodeHandler = async() => {
    // console.log("code running....");
    // const outputData = "";
    // Open Loading modal
    openModal({
      popup: true,
      type: "6",
      indentifier: {
        folderId: "",
        cardId: ""
      }
    });
    
    const data = await getToken() ;
    // console.log(data);
    const output = await getOutput(data.token);
    
    let outputStd = output.status.description;

    if (output.status.id === 3) {
       outputStd +=( "\n\n" + decode(output.stdout)) ;
    } else {
       outputStd +=( "\n" + decode(output.stderr)) ;
    }

    const resultOutput = {
      color: output.status.id === 3 ? "green" : "red",
      message: outputStd as string
    }
    outputHandler(resultOutput);
    closeModal(); // close loading modal
  }
  

  // Import Functionality

  // get file
  const getFile = (e: any) => {
    
    let input = e.target;
    if ("files" in input && input.files.length > 0) {
      placeFileContent(input.files[0]);
    }
    
  };
  //  set imported code to current code
  const placeFileContent = (file: any) => {
       readFileContent(file)
      .then((content) => {
        setCurrentCode(content as string);
      })
      .catch((error) => console.log(error));
  }
 
  // Export functionality
  // save to local system
  const saveIntoFile = async () => {
    // CREATE NEW FILE
    const handle = await getNewFileHandle();
    // written to file
     await writeFile(handle, currentCode);
  }

  // Full Screen Functionality
  const fullScreenHandler = () => {
     document.documentElement.requestFullscreen();
  }
  
  return( <EditorContainer>
    <UpperToolBar>
        <Title >
        <h2>{title} </h2>
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
        <SaveCode onClick={ saveCodeHandler}>
          Save
        </SaveCode>

        <Select
          value={currentLanguage}
          options={languageOptions}
          onChange={languageChangeHandler}/>
        <Select
          value={theamMode}
          options={modeOptions}
          onChange={modeChangeHandler}/>
      </Tools>
    </UpperToolBar>
    <CodeEditor langauge ={currentLanguage.value} theamMode={theamMode.value} currentCode={currentCode} codeChangeHandler={codeChangeHandler} />
    <LowerToolBar >
      <ButtonGroup>
        <Button onClick={fullScreenHandler}> <BsFullscreen/><span>Full Screen </span></Button>
        <ImportCode>
          <input type="file" accept=".txt" onChange={(e) => getFile(e)} />
          <CgImport />
          <span>Import code </span>
        </ImportCode>
        <Button onClick={saveIntoFile}>
          <CgExport /> <span>Export code</span>
        </Button>
       
      </ButtonGroup>
      <RunCode onClick={runCodeHandler} >
        Run code
      </RunCode>
    </LowerToolBar>
  </EditorContainer>
  )
}

export default Editor;

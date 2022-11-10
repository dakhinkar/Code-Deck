import React from "react";
import { CgImport } from "react-icons/cg";
import styled from "styled-components";

const Input = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  background-color:#f0f0f0e6;
`;

const Header = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  width: 100%;

`;

const HeaderContainer = styled.div`
  padding: 0 1rem;
  width: 100%; 
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2{
    font-size: 1rem;
    font-weight: 500;
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

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  border: none;
  outline: none;
  background-color: transparent;
  svg{
    font-size: 1.1rem;
    font-weight: 500;
  }
  span{
    font-size: 1rem;
    font-weight: 300;

  }
`;
const TextArea = styled.textarea`
  flex-grow: 1;
  grow: none;
  border: none;
  outline: none;
  padding: 5px;
  background-color: white;
`;

interface InputConsoleProps{
  testCase: string,
  testCaseHandler: (test :string) => void,
}

const InputConsole: React.FC<InputConsoleProps> = ({ testCase, testCaseHandler }) => {
  // get file

  const getFile = (e: any) => {
    
    let input = e.target;
    if ("files" in input && input.files.length > 0) {
      placeFileContent(input.files[0]);
    }
    
  };

  const placeFileContent = (file: any) => {
       readFileContent(file)
      .then((content) => {
        testCaseHandler(content as string);
      })
      .catch((error) => console.log(error));
  }
  const readFileContent = (file: any) => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (event) => resolve(event!.target!.result);
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  }

  const saveIntoFile = () => {
    async function getNewFileHandle() {
  const opts = {
    types: [{
      description: 'Text file',
      accept: {'text/plain': ['.txt']},
    }],
  };
      window.example = "Hello";
      console.log(window.example);
}

  }

  return <Input>
    <Header>
      <HeaderContainer>
        <h2>Input: </h2>
         <ImportCode>
          <input type="file" accept=".txt" onChange={(e) => getFile(e)} />
          <CgImport />
          <span>Import test </span>
        </ImportCode>
      </HeaderContainer>    
    </Header>    
    <TextArea value={testCase} onChange={(e) => testCaseHandler(e.target.value)}/>
  </Input>
};

export default InputConsole;

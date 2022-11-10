import React from "react";
import { CgExport } from "react-icons/cg";
import styled from "styled-components";
import {  writeFile, getNewFileHandle} from './fs-helper';
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
const OutputArea = styled.textarea`
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 5px;
  background-color: white;
`;

interface OutputConsoleProps{
  output:{color: string, message: string},
}


const OutputConsole: React.FC<OutputConsoleProps> = ({ output }) => {
 
  // Save to console output to local system
  const outputSaveHandler = async () => {
    const handle = await getNewFileHandle();
    await writeFile(handle, output.message);
  }
  return <Input>
    <Header>
      <HeaderContainer>
        <h2>Output: </h2>
        <Button onClick={outputSaveHandler}>
          <CgExport />
          <span>Export Output</span>
        </Button>
      </HeaderContainer>    
    </Header>    
    <OutputArea disabled value={output.message} style={{color: output.color}}/>
  </Input>
};

export default OutputConsole;

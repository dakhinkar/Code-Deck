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

const InputConsole = () => {
  return <Input>
    <Header>
      <HeaderContainer>
        <h2>Input: </h2>
        <Button>
          <CgImport />
          <span>Import test</span>
        </Button>
      </HeaderContainer>    
    </Header>    
    <TextArea/>
  </Input>
};

export default InputConsole;

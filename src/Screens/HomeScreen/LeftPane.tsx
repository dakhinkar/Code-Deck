import React from 'react';
import styled from 'styled-components';

const LeftPaneContainer = styled.div`
    position: fixed;
    top:0;
    left : 0;
    width: 40%;
    height: 100vh;
    display: flex;
    background-color: #221f20;
    justify-content: center;
    align-items: center;
`;

const ContentConainter = styled.div`
  text-align: center;  
`;

const Logo = styled.img`
    width: 165px;
    margin-bottom: 1rem;
`;

const MainHeading = styled.h1`
    font-size: 2.4rem;
    font-weight: 400;
    color: white;
    margin-bottom: 0.75rem;

    span{
      font-weight: 700;
    }
`;

const SubHeading = styled.h2`
    font-size: 1.5rem;
    color: white;
    opacity: 75%;
    margin-bottom: 1.5rem;
    font-weight: 400;
`;
const AddNewButton = styled.a`
   padding : 0.25rem 1rem;
   border-radius: 2rem;
   background-color: white;
   display : flex;
   align-items: center;
   justify-content: space-evenly;
   cursor: pointer;
   text-decoration: none;
  //  color: black;

    span{
      font-weight: 700;
      font-size: 2rem;
    }

    &:hover{
      opacity: 0.9;
    }
`;

const LeftPane = () => {
  return (
    <LeftPaneContainer>
          <ContentConainter>
              <Logo src="/logo.png" alt="Logo" />
              <MainHeading>
                <span>Code </span> Deck
              </MainHeading>
              <SubHeading>Code. Compile. Debug.</SubHeading>
              <AddNewButton href=""><span>+</span> Create New Playground</AddNewButton>
              
          </ContentConainter>
    </LeftPaneContainer>
  )
}

export default LeftPane;
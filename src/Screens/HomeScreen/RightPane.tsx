import React, { useContext } from 'react';
import styled from 'styled-components';
import { IoTrashOutline } from 'react-icons/io5';
import { BiEditAlt } from 'react-icons/bi';
import { ModalContext } from '../../context/ModalContex';
interface HeaderProps{
  readonly variant: string;
}
 
interface HeadigProps{
  readonly size: string;
}

const StyledRightPane = styled.div`
  position: absolute;
  width: 60%;
  right: 0;
  top: 0;
  padding : 2rem;
  background: #fafafa;
`;

const Header = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  &::after{
    position :absolute;
    content : "";
    bottom : -1.25rem;
    width: 100%;
    height: 2px;
    background: rgba(0,0,0,0.25);
    display : ${(props)=> props.variant === "main" ? "block" : "none"}

  }
  margin-bottom: ${(props)=> props.variant === 'main' ? "2rem" : "1rem"};

`;

const Heading = styled.h3<HeadigProps>`
  font-weight :400;
  font-size : ${(props) => (props.size === "large" ? "1.8rem" : "1.5rem")};
  span{
    font-weight : 700;
  }
  
`;

const AddButton = styled.button`
  display : flex;
  gap: 0.5rem;
  align-items: center;
  background: transparent;
  outline: 0;
  border : 0;
  font-size: 1.1rem;
  cursor: pointer;
  span{
    font-size: 1.75rem;
    font-weight : 700;
  }
  transition: all 0.3s ease;

  &:hover{
    opacity: 0.9;
    scale: 1.1;
  }
`;

const Folder = styled.div`
  display :flex;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;
const Card = styled.div`
  
  display: flex;
  align-items: center;
  padding: 0.6rem;
  gap: 1rem;
  box-shadow : 3px 4px 50px -25px rgb(0 0 0 / 75%);
`;

const SmallLogo = styled.img`
  width :75px;
`;

const CardContent = styled.div`
  flex-grow :1;
  h5{
    font-weight: 400;
    font-size : 1.2rem;
    margin-bottom: 0.25rem;
  }

`
const Icons = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 1.2rem;
`;


const RightPane = () => {
  const modalFeature = useContext(ModalContext);
  const setIsOpen = modalFeature?.setIsOpen;
  return (
    <StyledRightPane>
      <Header variant='main'>
        <Heading size="large" >My <span>Playground </span></Heading>
        <AddButton ><span>+</span> New playground</AddButton>
      </Header>
      <div className="folder">
        <Header variant='folder'>
          <Heading size="small">Data Structure</Heading>
          <AddButton className="addButtton">
            <span>+</span> New Playground
          </AddButton>
        </Header>
        <CardContainer>
          <Card>
            <SmallLogo src="/logo-small.png" alt="logo" />
            <CardContent>
              <h5>Stack implementation</h5>
              <p>Langauge: c++</p>
            </CardContent>
            <Icons>
              <IoTrashOutline /> 
              <BiEditAlt onClick={() => {
                if(setIsOpen) setIsOpen(true)
              }}/>
            </Icons>
          </Card>
           <Card>
            <SmallLogo src="/logo-small.png" alt="logo" />
            <CardContent>
              <h5>Stack implementation</h5>
              <p>Langauge: c++</p>
            </CardContent>
            <Icons>
              <IoTrashOutline /> 
              <BiEditAlt/>
            </Icons>
          </Card>
           <Card>
            <SmallLogo src="/logo-small.png" alt="logo" />
            <CardContent>
              <h5>Stack implementation</h5>
              <p>Langauge: c++</p>
            </CardContent>
            <Icons>
              <IoTrashOutline /> 
              <BiEditAlt/>
            </Icons>
          </Card>
        </CardContainer>
      </div>
      <div className="folder">
        <Header variant='folder'>
          <Heading size="small">Data Structure</Heading>
          <AddButton className="addButtton">
            <span>+</span> New Playground
          </AddButton>
        </Header>
        <CardContainer>
          <Card>
            <SmallLogo src="/logo-small.png" alt="logo" />
            <CardContent>
              <h5>Stack implementation</h5>
              <p>Langauge: c++</p>
            </CardContent>
            <Icons>
              <IoTrashOutline /> 
              <BiEditAlt/>
            </Icons>
          </Card>
           <Card>
            <SmallLogo src="/logo-small.png" alt="logo" />
            <CardContent>
              <h5>Stack implementation</h5>
              <p>Langauge: c++</p>
            </CardContent>
            <Icons>
              <IoTrashOutline /> 
              <BiEditAlt/>
            </Icons>
          </Card>
           <Card>
            <SmallLogo src="/logo-small.png" alt="logo" />
            <CardContent>
              <h5>Stack implementation</h5>
              <p>Langauge: c++</p>
            </CardContent>
            <Icons>
              <IoTrashOutline /> 
              <BiEditAlt/>
            </Icons>
          </Card>
        </CardContainer>
      </div>
      <div className="folder">
        <Header variant='folder'>
          <Heading size="small">Data Structure</Heading>
          <AddButton className="addButtton">
            <span>+</span> New Playground
          </AddButton>
        </Header>
        <CardContainer>
          <Card>
            <SmallLogo src="/logo-small.png" alt="logo" />
            <CardContent>
              <h5>Stack implementation</h5>
              <p>Langauge: c++</p>
            </CardContent>
            <Icons>
              <IoTrashOutline /> 
              <BiEditAlt/>
            </Icons>
          </Card>
           <Card>
            <SmallLogo src="/logo-small.png" alt="logo" />
            <CardContent>
              <h5>Stack implementation</h5>
              <p>Langauge: c++</p>
            </CardContent>
            <Icons>
              <IoTrashOutline /> 
              <BiEditAlt/>
            </Icons>
          </Card>
           <Card>
            <SmallLogo src="/logo-small.png" alt="logo" />
            <CardContent>
              <h5>Stack implementation</h5>
              <p>Langauge: c++</p>
            </CardContent>
            <Icons>
              <IoTrashOutline /> 
              <BiEditAlt/>
            </Icons>
          </Card>
        </CardContainer>
      </div>
      <div className="folder">
        <Header variant='folder'>
          <Heading size="small">Data Structure</Heading>
          <AddButton className="addButtton">
            <span>+</span> New Playground
          </AddButton>
        </Header>
        <CardContainer>
          <Card>
            <SmallLogo src="/logo-small.png" alt="logo" />
            <CardContent>
              <h5>Stack implementation</h5>
              <p>Langauge: c++</p>
            </CardContent>
            <Icons>
              <IoTrashOutline /> 
              <BiEditAlt/>
            </Icons>
          </Card>
           <Card>
            <SmallLogo src="/logo-small.png" alt="logo" />
            <CardContent>
              <h5>Stack implementation</h5>
              <p>Langauge: c++</p>
            </CardContent>
            <Icons>
              <IoTrashOutline /> 
              <BiEditAlt/>
            </Icons>
          </Card>
           <Card>
            <SmallLogo src="/logo-small.png" alt="logo" />
            <CardContent>
              <h5>Stack implementation</h5>
              <p>Langauge: c++</p>
            </CardContent>
            <Icons>
              <IoTrashOutline /> 
              <BiEditAlt/>
            </Icons>
          </Card>
        </CardContainer>
      </div>
    </StyledRightPane>
  )
}

export default RightPane;
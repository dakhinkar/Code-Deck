import React, { useContext } from 'react';
import styled from 'styled-components';
import { IoTrashOutline } from 'react-icons/io5';
import { BiEditAlt } from 'react-icons/bi';
import { ModalContext } from '../../context/ModalContex';
import { PlaygroundContext } from '../../context/PlaygroundContex';
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
  margin-bottom: 1rem;
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
  align-items: center;
`;
// 1 create Folder;
// 2 create playgound
// 3 edit Folder 
// 4 edit Playground



const RightPane = () => {
  const modalFeature = useContext(ModalContext)!;
  const {openModal} = modalFeature;

  const PlaygroundFeature = useContext(PlaygroundContext)!;
  const { folders,deleteFolder,deletePlayground } = PlaygroundFeature;
  


  return (
    <StyledRightPane>
      <Header variant='main'>
        <Heading size="large" >My <span>Playground </span></Heading>
        <AddButton
          onClick={() => {
            openModal({
              popup: true,
              type: "1",
              indentifier: {
                folderId: "",
                cardId: ""
              }
            })
        }} ><span>+</span> New playground</AddButton>
      </Header>
      {
        Object.entries(folders).map(([folderId, folder]) => (  
          <Folder>
            <Header variant='folder'>
              <Heading size="small">{folder.title}</Heading>
               <Icons>
                  <IoTrashOutline onClick={() => deleteFolder(folderId)} /> 
                  <BiEditAlt  onClick={() => {
                      openModal({
                        popup: true,
                        type: "3",
                        indentifier: {
                          folderId: folderId,
                          cardId: ""
                        }
                      })
                  }} />
                  <AddButton
                    onClick={() => {
                        openModal({
                            popup: true,
                            type: "2",
                            indentifier: {
                              folderId: folderId,
                              cardId: ""
                            }
                          })
                      }}>
                      <span>+</span> New Playground
                  </AddButton>
                </Icons>
               
            </Header>
            <CardContainer>
               {
                  Object.entries(folder.items).map(([cardId, card]) => (
                      <Card>
                        <SmallLogo src="/logo-small.png" alt="logo" />
                        <CardContent>
                        <h5>{ card.title }</h5>
                        <p>Langauge: { card.language}</p>
                        </CardContent>
                        <Icons>
                          <IoTrashOutline onClick={() => deletePlayground(folderId, cardId)}/> 
                          <BiEditAlt onClick={() => {
                            openModal(
                              {
                                popup: true,
                                type: "4",
                                indentifier: {
                                  folderId: folderId,
                                  cardId : cardId
                                }
                                })
                            }}/>
                        </Icons>
                      </Card>
                  ))
                }
            </CardContainer>
          </Folder>
        ) ) 
      }
      
    </StyledRightPane>
  )
}

export default RightPane;
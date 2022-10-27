import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import EditFolder from "../../Components/modal-type/EditFolder";

import Editor from "./Editor";
import InputConsole from "./InputConsole";
import OutputConsole from "./OutputConsole";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContex";
import Modal from "../../Components/Modal";




const PlaygroundC = styled.div`
    width:100vw;
    height: 100vh;
    background-color: #221F20;

`;


const Header = styled.div`
    width: 100%;
    height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const HeaderContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border:none;
    outline: none;
    background-color: transparent;
    font-size: 1.5rem;
    font-weight: 400;
    
    span{
        font-weight: 700;
    }

`;
const Logo = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 0.5rem;
`;


const PlaygroundContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 2fr 1fr;
`;

const Console = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
`;

const Playground = () => {
    const ModalFeature = useContext(ModalContext)!;
    const { isOpen} = ModalFeature;
    const navigate = useNavigate();
    return (
        <PlaygroundC>
            {isOpen.popup && <Modal/>}
            <Header>
                <HeaderContainer onClick={() => navigate("/")}>
                    <Logo src="/logo-small.png" alt="logo" />
                    <span>Code </span> Deck
                </HeaderContainer>    
            </Header>
            <PlaygroundContainer>
                <Editor />
                <Console>
                    <InputConsole />
                    <OutputConsole />
                </Console>
            </PlaygroundContainer>
        </PlaygroundC>
    )
}

export default Playground;

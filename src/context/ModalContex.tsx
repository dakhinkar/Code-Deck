import { createContext, useState } from "react";


interface ModalFeilds{
    popup: boolean;
    type: string,
    indentifier: {
        folderId: string;
        cardId: string
    }
}

interface ModalContextType  {
    isOpen: ModalFeilds;
    openModal: (value: ModalFeilds) => void;
    closeModal: () => void;
    
}

// OpenModal();
// closeModal();

export const ModalContext = createContext<ModalContextType |null>(null);

let initialModalState = {
        popup: false,
        type: "",
        indentifier: {
            folderId: "",
            cardId: ""
        }
}

export default function ModalProvider({ children }: { children: any }) {
    const [isOpen, setIsOpen] = useState({...initialModalState});
    const openModal = (value: ModalFeilds) => {
        setIsOpen(value);
    }

    const closeModal = () => {
        setIsOpen(initialModalState);
    }
    return  <ModalContext.Provider value={{isOpen, openModal, closeModal}}>
            {children};
        </ModalContext.Provider>    
}



import { createContext, useState } from "react";


interface ModalDeatails{
    popup: boolean;
    type: string,
    indentifier: {
        folderId: string;
        cardId: string
    }
}

interface ModalContextType  {
    isOpen: ModalDeatails;
    setIsOpen: (isOpen: ModalDeatails) => void;
    
}

export const ModalContext = createContext<ModalContextType |null>(null);

export default function ModalProvider({ children }: { children: any }) {
    let globalAvailable = {
        popup: false,
        type: "",
        indentifier: {
            folderId: "",
            cardId: ""
        }
    }
    const [isOpen, setIsOpen] = useState({...globalAvailable});

    return  <ModalContext.Provider value={{isOpen, setIsOpen}}>
            {children};
        </ModalContext.Provider>    
}



import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';

interface PlaygroundFeilds{
    [key:string]: {
        title: string;
        items: {
            [key: string]: {
                title: string;
                language: string;
            }
        }
    }

}

interface PlaygroundContextType  {
    folders: PlaygroundFeilds;
    setFolders: (folders: any) => void;  
    createNewFolder: (folderTitle: string) => void;
    createNewPlayground: (folderId: string, playgroundTitle: string, pLangauge: string) => void;
    createNewFolderAndPlayground: (folderTitle: string, playgroundTitle: string, pLangauge: string)=> void;
    editPlaygroundTitle: (folderId: string, cardId: string, playgroundTitle: string) => void;
    editFolderTitle: (folderId: string, folderTitle: string ) => void;
    deletePlayground: (folderId: string, cardId: string)=> void;
    deleteFolder: (folderId: string)=> void;
        
}

let initialFolders = {
  [uuid()]: {
      title: "Data Structure",
      items: {
        [uuid()]: {
          title: "Stack implementation",
          language: "c++"
        },
        [uuid()]: {
          title: "queue implementation",
          language: "c++"
        },
        [uuid()]: {
          title: "3 implementation",
          language: "c++"
        }
      }
    },
    [uuid()]: {
      title: "Folder2",
      items: {
        [uuid()]: {
          title: "Stack implementation",
          language: "c++"
        },
        [uuid()]: {
          title: "queue implementation",
          language: "c++"
        },
        [uuid()]: {
          title: "3 implementation",
          language: "c++"
        }
      }
    }
    }

// CreateNewFolder(folderTitle);
// CreateNewPlayground(folderId, playgroundTitle, pLangauge)
// CreateNewFolderAndPlayground(folderTitle,  playgroundTitle, pLangauge )
// EditPlaygroundTitle(folderId, cardId, playgroundTitle)
// EditFolderTitle(folderId,folderTitle )
// DeletePlayground(folderId, cardId)
// DeleteFolder(folderId);



export const PlaygroundContext = createContext<PlaygroundContextType |null>(null);

export default function PlaygroundProvider({ children }: { children: any }) {
    
  const [folders, setFolders] = useState(() => {
    let playgoundFolder = JSON.parse(localStorage.getItem('playground-folder') as string ); 
    if (Object.keys(playgoundFolder).length === 0)
      return initialFolders;
    
    return playgoundFolder ;
    });

    useEffect(() => {
      localStorage.setItem('playground-folder', JSON.stringify(folders));  
    },[folders])

    const createNewFolder = (folderTitle : string) => {
      setFolders((oldFolder: any) => {
        const newFolder = { ...oldFolder };
        newFolder[uuid()] = {
          title: folderTitle,
          items: {}
        }
        return newFolder;
      })
  }
  
  const createNewPlayground = (folderId: string, playgroundTitle: string, pLangauge: string) => {
    setFolders((oldFolder : any) => {
      const newFolder = { ...oldFolder };
      newFolder[folderId].items[uuid()] = {
        title: playgroundTitle,
        language: pLangauge
      };
      return newFolder;
    })
  }

  const createNewFolderAndPlayground = (folderTitle: string, playgroundTitle: string, pLangauge: string) => {
    setFolders((oldFolder : any) => {
      const newFolder = { ...oldFolder };
      newFolder[uuid()] = {
        title: folderTitle,
        items: {
          [uuid()]: {
            title: playgroundTitle,
            language: pLangauge
          }
        }
      };
      return newFolder;
    } )
  }
  
  const editPlaygroundTitle = (folderId: string, cardId: string, playgroundTitle: string) => {
    setFolders((oldFolder : any) => {
      const newFolder = { ...oldFolder };
      newFolder[folderId].items[cardId].title = playgroundTitle;
      return newFolder;
    })
  }

  const editFolderTitle = (folderId: string, folderTitle: string) => {
    setFolders((oldFolder : any) => {
      const newFolder = { ...oldFolder };
      newFolder[folderId].title = folderTitle;
      return newFolder;
    })
  }
  
  const deletePlayground = (folderId : string, cardId : string) => {
    setFolders((oldFolder : any) => {
      const newFolder = { ...oldFolder };
      delete newFolder[folderId].items[cardId];
      return newFolder;
    })
  }
  const deleteFolder = (folderId: string) => {
    setFolders((oldFolder : any)  => {
      const newFolder = { ...oldFolder };
      delete newFolder[folderId];
      return newFolder;
    })
  }
    return <PlaygroundContext.Provider
      value={
        {
          folders, setFolders,
          createNewFolder, createNewPlayground, createNewFolderAndPlayground,
          editFolderTitle, editPlaygroundTitle,
          deleteFolder, deletePlayground
        }}>
            {children};
        </PlaygroundContext.Provider>    
}




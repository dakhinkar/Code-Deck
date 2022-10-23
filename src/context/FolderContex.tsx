import { createContext, useState } from "react";


//   const folders = {
//     ["1"]: {
//       title: "Data Structure",
//       items: {
//         "cardId-1": {
//           title: "Stack implementation",
//           language: "c++"
//         },
//          "cardId-2": {
//           title: "queue implementation",
//           language: "c++"
//         },
//           "cardId-3": {
//           title: "3 implementation",
//           language: "c++"
//         }
//       }
//     },
//     ["2"]: {
//       title: "Folder2",
//       items: {
//         "cardId-4": {
//           title: "Stack implementation",
//           language: "c++"
//         },
//          "cardId-5": {
//           title: "queue implementation",
//           language: "c++"
//         },
//           "cardId-6": {
//           title: "3 implementation",
//           language: "c++"
//         }
//       }
//     }
//   }

interface FolderDetails{
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

interface FolderContextType  {
    folders: FolderDetails;
    setFolders: (folders: any) => void;
    
}

export const FolderContext = createContext<FolderContextType |null>(null);

export default function FolderProvider({ children }: { children: any }) {
    let globalAvailable = {
    ["1"]: {
      title: "Data Structure",
      items: {
        "cardId-1": {
          title: "Stack implementation",
          language: "c++"
        },
         "cardId-2": {
          title: "queue implementation",
          language: "c++"
        },
          "cardId-3": {
          title: "3 implementation",
          language: "c++"
        }
      }
    },
    ["2"]: {
      title: "Folder2",
      items: {
        "cardId-4": {
          title: "Stack implementation",
          language: "c++"
        },
         "cardId-5": {
          title: "queue implementation",
          language: "c++"
        },
          "cardId-6": {
          title: "3 implementation",
          language: "c++"
        }
      }
    }
    }
    const [folders, setFolders] = useState({...globalAvailable});

    return  <FolderContext.Provider value={{folders,setFolders}}>
            {children};
        </FolderContext.Provider>    
}




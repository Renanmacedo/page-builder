import { Children, FunctionComponent, createContext, useContext } from "react";

type EditorContextProps ={ 
    
}

const EditorContext  = createContext({});

const EditorProvider: FunctionComponent<any> = ( { children }) => {

    return (
        <EditorContext.Provider value={{}}>
        {children}            
        </EditorContext.Provider>
    )
}
export const useEditor = () => useContext(EditorContext);
export default EditorContextProps
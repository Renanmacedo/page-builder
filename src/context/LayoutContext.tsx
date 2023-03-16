import {createContext, FunctionComponent, useState } from 'react'

type PositionLayout =  "left" | "right";
type LayoutContextProps ={ 
    layoutPosition: PositionLayout; 
    changePosition: (position: PositionLayout) => void
}
const LayoutContext = createContext<LayoutContextProps>({layoutPosition: "left", changePosition: () => {} });
LayoutContext.displayName = "LayoutContext"

const LayoutContextProvider: FunctionComponent<any> = ({ children }) => {

    const [layoutPosition, setLayoutPosition] = useState<PositionLayout>('left');

    const changePosition = (position: PositionLayout) => {
        setLayoutPosition(position);
    }
    return (
        <LayoutContext.Provider value={{ layoutPosition, changePosition }}>
            { children }
        </LayoutContext.Provider>
    )
}
export { LayoutContext };
export default LayoutContextProvider;





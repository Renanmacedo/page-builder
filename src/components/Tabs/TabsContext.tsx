import React  from 'react'
import { TabsProps } from "../../hooks/useTabs/useTabs.type";

const Context = React.createContext<TabsProps | null>(null);

export const useContextTabs = () => React.useContext(Context);

export default Context
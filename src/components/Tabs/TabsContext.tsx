import React  from 'react'
import { TabsProps } from "../../hooks/useTabs/useTabs.type";

const INITIAL_STATE = {
    onTabChange: () => ({}),
    defaultValue: '',
    orientation: 'horizontal',
    currentIndex: 0
}
const Context = React.createContext<TabsProps>(INITIAL_STATE);

export const useContextTabs = () => React.useContext<TabsProps>(Context);

export default Context
import { useMemo, useState } from "react";

import { TabsProps, TabReturnType } from './useTabs.type';

const useTabs = ( props: TabsProps): TabReturnType => {
    
    const [currentIndexTab, setCurrentIndexTab] = useState<number>(0);
    const [orientation, setOrientation] = useState<string>('horizontal');

    const [hasChange, setHasChange] = useState(false);

    const changeOrintation = () => {
        setOrientation(props.orientation || '');
    }
    const onTabChange = () => {

        if(props.currentIndex !== currentIndexTab) {
            setCurrentIndexTab(currentIndexTab)
            setHasChange(true)
        }
    }

    const tabsContextValue = useMemo(() => ({ 
        onTabChange,
        currentIndex: currentIndexTab,
        orientation,
        changeOrintation,
        hasChange
    }), [currentIndexTab, orientation, hasChange,onTabChange,changeOrintation]);

    return tabsContextValue;
    
};


export default useTabs;
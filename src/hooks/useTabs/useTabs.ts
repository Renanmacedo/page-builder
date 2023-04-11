import { useCallback, useMemo, useState } from "react";

import { TabsProps, TabReturnType } from './useTabs.type';

const useTabs = ( props: TabsProps): TabReturnType => {
    
    const { orientation: originalOrientation, defaultValue} = props

    const [currentValue, setCurrentValue] = useState<string>(defaultValue);
    const onSelection = useCallback((newValue: string) => {
        if(currentValue && currentValue !== newValue) {
            setCurrentValue(newValue)
        }
    }, [currentValue])

    const tabsContextValue = useMemo(() => ({ 
        onSelection,
        orientation: originalOrientation,
        defaultValue: currentValue
    }), [ originalOrientation, onSelection, currentValue]);

    return tabsContextValue;
    
};


export default useTabs;
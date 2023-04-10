import { PropsWithChildren } from "react"
import useTabs from "../../hooks/useTabs/useTabs";
import { TabsProps } from "../../hooks/useTabs/useTabs.type";
import { HTMLPageBuildProps } from "../../types/types";
import { forwardRef } from "../../utils/forwardRef";
import Context from "./TabsContext";

const DEFAULT_TAG = 'div';
type TabsHtmlProps = HTMLPageBuildProps<typeof DEFAULT_TAG>;
type TabsComponentProps = TabsProps & TabsHtmlProps & PropsWithChildren<any>; 


const Tabs = forwardRef<'div', TabsComponentProps>((props, ref) => {
    const {as: AsComponent = DEFAULT_TAG , children} = props;

    const otherProps = { ...props, as: undefined};

    const tabsContextValue = useTabs(props);
    console.log(tabsContextValue)
    return  (
        <AsComponent  ref={ref} {...otherProps} className="w-full h-full flex">
            <Context.Provider value={tabsContextValue} > {children} </Context.Provider>
        </AsComponent> 
    )
});
Tabs.displayName= "Tabs";
export default Tabs;
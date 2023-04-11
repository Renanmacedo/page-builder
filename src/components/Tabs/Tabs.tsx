import React, { PropsWithChildren } from "react"
import useTabs from "../../hooks/useTabs/useTabs";
import { TabsProps } from "../../hooks/useTabs/useTabs.type";
import { HTMLPageBuildProps } from "../../types/types";
import { forwardRef } from "../../utils/forwardRef";
import Button from "../Button/Button";
import Context, { useContextTabs } from "./TabsContext";

const DEFAULT_TAG = 'div';
type TabsHtmlProps = HTMLPageBuildProps<typeof DEFAULT_TAG>;
type TabsComponentProps = TabsProps & TabsHtmlProps & PropsWithChildren<any>; 


const Tabs = forwardRef<'div', TabsComponentProps>((props, ref) => {
    const {as: AsComponent = DEFAULT_TAG , children} = props;

    const otherProps = { ...props, as: undefined};    
    const tabsContextValue = useTabs(otherProps);

    return  (
        <AsComponent  ref={ref} {...otherProps}>
            <Context.Provider value={tabsContextValue} > 
                {children} 
            </Context.Provider>
        </AsComponent> 
    )
});

type TabListHeaderProps = {
    title?: string | React.ReactNode | HTMLElement,
    active?: boolean,
    onChange?: () => void,
    value: string,
} & React.PropsWithChildren<any>;

type TabListProps = TabListHeaderProps & TabsHtmlProps & PropsWithChildren<any>; 

const TabList = forwardRef<'div', TabListProps>((props, ref)=> {

    const tabsContext = useContextTabs();
    return (
        <div role="tablist" 
            aria-orientation={tabsContext?.orientation} {...props} ref={ref} />
    )
})

type TabListHeaderPropsCustom =   TabsHtmlProps & PropsWithChildren<any> & {isFull: boolean, rouded: boolean }; 

const TabListHeader = forwardRef<'div', TabListHeaderPropsCustom>((props, ref) => {

    const context = useContextTabs();

    const { value }  = props;
    const isSelected = context?.defaultValue === value
    return (
        <div className={`border-b border-mauve6 text-center w-full bg-white p-2 cursor-pointer ${isSelected ? 'border-b-purple-800' :''}`}>
            <Button {...props} ref={ref}  onClick={() => { 
                context.onSelection(value)
            }}  />

        </div>
     
    )
})

type TabContentProps =   Pick<TabsComponentProps, 'children' | 'value'> & TabsHtmlProps & PropsWithChildren<any>; 
const TabContent = forwardRef<'div', TabContentProps>((props, ref) => {
    const context = useContextTabs();

    const { value} = props;
    const isSelected = context?.defaultValue === value    
    return (
        <>
            {isSelected && (
                <div {...props} ref={ref}/>
            )
        }
    </>
    )
})
const Root = Tabs
const List = TabList
const Content = TabContent
const ListHeader =TabListHeader
export {
    
    Root,
    List,
    ListHeader,
    Content
}
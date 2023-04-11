import React, { createElement } from "react";
import Card from "../components/Card/Card";
import Text from "../components/Text/Text";
import { As, HTMLPageBuildProps } from "../types/types";

const componentPageBuilder = {
    Text: Text,
    Card: Card 
}
const DEFAULT_TAG = 'div';

// export type ComponentProps<T extends As> = HTMLPageBuildProps<T> &
//     Omit<{ type: string }, 'type'>;

// export const createComponent = <T extends As>(componentProps: ComponentProps<T>) => React.forwardRef<T,any>((props, ref) => {

//     const forwardProps: ComponentProps<T> = { ...componentProps, ...props, ref };

//     let Type =  forwardProps?.type ? forwardProps?.type : DEFAULT_TAG;
//     if(forwardProps?.as){
//         Type = forwardProps?.as;
//         delete forwardProps.as
//     }
//     return React.createElement(Type, { ...forwardProps})
// })

export const createComponent = (components: any) => {

    const { componentName = 'default', children = [], props } = components
    
    const Component = (componentPageBuilder as any)[componentName];
    
    // if(children) {
    // childrens = children?.map(createElement);
    console.log(Component)
    return React.createElement(Component, {...props});
}

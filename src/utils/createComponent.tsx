import  { createElement, useRef } from "react";

import Text from "../components/Text/Text";

const componentPageBuilder = {
    text: Text
};

export const createComponent = (component: any) => {
    
    const { id : key ,type = 'text',   className, style} = component

    const Component = (componentPageBuilder as any)[type];
    if(!Component) return null;

    return createElement(Component, {...component}, 
         component.children && 
         ( typeof component.children === 'string' ? component.children : component.children.map((c: any) => createComponent(c) )) 
        );
}

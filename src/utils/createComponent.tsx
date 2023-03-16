import React from "react";
import { As, HTMLPageBuildProps } from "../types/types";

const DEFAULT_TAG = 'div';

export type ComponentProps<T extends As> = HTMLPageBuildProps<T> &
    Omit<{ type: string }, 'type'>;

export const createComponent = <T extends As>(componentProps: ComponentProps<T>) => React.forwardRef<T,any>((props, ref) => {
    
    const forwardProps: ComponentProps<T> = { ...componentProps, ...props, ref };

    let Type =  forwardProps?.type ? forwardProps?.type : DEFAULT_TAG;

    if(forwardProps?.as){
        Type = forwardProps?.as;
        delete forwardProps.as
    }
    return React.createElement(Type, { ...forwardProps})
})


import React from "react";
import { As, PageBuildComponent, PropsOf, RightJoinProps } from "../types/types";

export const forwardRef = <Component extends As, Props extends object ={}>(component: 
    React.ForwardRefRenderFunction<any, RightJoinProps<PropsOf<Component>, Props> 
    & { as: As}>) => {
return React.forwardRef(component) as unknown as PageBuildComponent <Component, Props>;
}
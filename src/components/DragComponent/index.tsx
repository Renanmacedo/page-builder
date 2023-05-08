import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { createComponent } from "../../utils/createComponent";
import useDrag from "../../hooks/useDrag";
import React from 'react';
export type ComponentProps = {

    type: string;
    id: string;
    label: string;
    className: string, style: string
    children: ReactNode;
    ref: RefObject<any>

}
const DragComponent = ({ ...props }: ComponentProps ) => {
    const dragComponentRef = useRef<any>();
    const onStart = (event: DragEvent) => {
        console.log(event)
    } 
    const { dragRef } = useDrag({onStart})
    const copyProps = Object.assign(props, { ref: dragRef});
    const ComponentCompoused = createComponent(copyProps);
    return  ComponentCompoused
}

export default DragComponent;
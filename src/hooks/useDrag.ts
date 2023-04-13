import { RefObject, useEffect, useRef, useState } from "react";

type DragProps = {
    position?: { x: number, y: number};
    ref?: RefObject<HTMLElement>;

}

const useDrag = () => {

    const element = useRef<HTMLElement>(null);

    const [draggable, setDraggable] = useState<boolean>(false);

    const dragStart = () => {
        console.log('dragstart', element);
    }
    const dragEnd = () => {
        console.log('dragend', element);
    }

    useEffect(() => {
        if(element.current) {
            element.current.addEventListener('dragstart', dragStart);
            element.current.addEventListener('dragend', dragEnd);
        }
     return () => {
         element?.current?.removeEventListener('dragstart', dragStart);
         element?.current?.removeEventListener('dragend', dragEnd);
     }   
    }, [element])
    return {
        draggable,
        element
        
    }
    
};


export default useDrag;
import { RefObject, useEffect, useRef, useState } from "react";


type ReturnDragHover = {
    target: HTMLElement
}
type DragProps = {
    onStart?: (event: DragEvent) => void,
    data?: { type: string, id: string},
    onFinish?: () => void
}

const useDrag = ({ onStart, onFinish, data }: DragProps) => {

    const [ isDragging, setIsDragging] = useState<boolean>(false);
    const dragRef = useRef<HTMLElement>(null);
    
    const dragStart = (event: DragEvent) => {''
        event.dataTransfer?.setData(data?.type || '', data?.id || '');
        setIsDragging(true)
        onStart?.(event)
    }
    const onDragEnd = () => {
        setIsDragging(false);
    }
    useEffect(() => {
        if(dragRef.current) {
            dragRef.current.setAttribute('draggable', "true");
            dragRef.current.addEventListener('dragstart', dragStart);
            
            dragRef.current.addEventListener('dragend', onDragEnd);
        }
     return () => {
         dragRef.current?.removeEventListener('dragstart', dragStart);
         dragRef.current?.removeEventListener('dragend', onDragEnd);
     }   
    }, [dragRef])
    return {
        dragRef,
        isDragging
    }
    
};


export default useDrag;
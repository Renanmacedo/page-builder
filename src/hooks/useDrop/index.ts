import { useEffect, useRef, useState } from 'react'

type DropProps = {

};

const useDrop = ({ onDrop, onHover }) =>  {
    const [isDragging,setIsDragging] = useState<boolean>(false)
    const dropRef = useRef<HTMLElement>(null);

    const dropElement = (event: DragEvent) => {
        onDrop?.(event);
        setIsDragging(false)
    }
    const onDragging = (event: DragEvent) => {
        event.preventDefault()
        setIsDragging(true)
        const target = event.dataTransfer?.getData('component')
        onHover?.({ target: target })
    }
    const onDragLeave = (event: DragEvent) => {
        event.preventDefault();
        
        setIsDragging(false)
    }
    useEffect(() => {

        if(dropRef.current) {
            dropRef.current.addEventListener('drop', dropElement);
            dropRef.current.addEventListener('dragover', onDragging);
            dropRef.current.addEventListener('dragleave', onDragLeave);
        }
        return () => {
            dropRef.current?.removeEventListener('drop', dropElement);
            dropRef.current?.removeEventListener('dragover', onDragging);
            dropRef.current?.removeEventListener('dragleave', onDragLeave);
        }
    }, [dropRef.current])


    return {
        dropRef,
        isDragging
    }
}


export default useDrop;
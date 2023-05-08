import { SyntheticEvent, useState } from 'react'
import useDrop from '../../hooks/useDrop'
/** Montar as seções a partir dos components criados */



const Editor =  ({ ...props}) =>{
    
    const [isHover, setIsHover] = useState<boolean>(false)
    const onDrop = (event: DragEvent) => {
    }
    const onHover = (target: any) => {
        
        console.log(target)
    }
    const {  dropRef, isDragging  } = useDrop( { onHover });

    return (
        <div {...props} ref={dropRef}>
            {/* render ther components */}
            <div className={`p-2 h-full bg-white w-full ${isDragging ? 'border border-solid border-sky-400' : ''}`}>

                {/* <Component /> */}
            </div>
        </div>        
    )
}

export default Editor;
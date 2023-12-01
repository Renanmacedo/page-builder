import { useRef, useState } from 'react'
import useDrop from '../../hooks/useDrop'
import useUndoRedo from '../../hooks/useUndoRedo'
/** Montar as seções a partir dos components criados */



const Editor =  ({ ...props}) =>{
    const refInput = useRef<HTMLInputElement>(null)
    const [isHover, setIsHover] = useState<boolean>(false)
    const {addData, history, feture, position, undo, redo, canRedo, canUndo } = useUndoRedo<string>({ items: []});

    const onDrop = (event: DragEvent) => {
    }
    const onHover = (target: any) => {    }
    const {  dropRef, isDragging  } = useDrop( { onHover });
    
    return (
        <div {...props} ref={dropRef}>
            {/* render ther components */}
            <div className={`p-2 h-full bg-white w-full ${isDragging ? 'border border-solid border-sky-400' : ''}`}>

                {/* <Component /> */}


                {/* <div className='w-full h-full'>
                    <div className='flex'>
                        <input ref={refInput} onKeyDownCapture={event => {
                            if(event.key === 'Enter') {
                                addData({ items: [refInput.current?.value ?? '']})
                            }
                        }} className='h-10 w-full p-2 border border-solid border-sky-200 border-r'/>
                        <button className='bg-sky-900 text-white p-2' onClick={() => { 
                                if(refInput.current?.value){

                                    addData({ items:  [refInput.current.value]}) 
    
                                    refInput.current.value = ''
                                } 
                            }}>Adicionar</button>
                    </div>
                    <div className='flex justify-between'>
                        <div className='w-full'>
                            <h2 className='mt-5'>Lista de historico</h2>
                            <div className='w-full p-4 border border-sky-700'>
                                { history.map(element => (<p key={element}>{element}</p>))}
                            </div>
                        </div>
                        <div className='w-full'>
                        <h2 className='mt-5'>Lista de futuros</h2>
                            <div className='w-full p-4 border border-sky-700'>
                                { feture.map(element => (<p key={element + 1}>{element}</p>))}
                            </div>
                        </div>

                    </div>
                    <h2>Posição: {position}</h2>
                    <div className='flex justify-around mt-2'>
                        <button className='bg-red-400 p-2' onClick={() => undo()} disabled={canUndo()}>Desfazer</button>
                        <button className='bg-zinc-800 p-2 text-white' onClick={() => redo()} disabled={canRedo()}>Refazer</button>  
                    </div>
                </div> */}
            </div>
        </div>        
    )
}

export default Editor;
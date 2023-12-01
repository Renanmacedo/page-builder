import { useMemo, useState } from "react"

type UndoRedoProps<T> = {
    items: T[];
}
type UndoRedoOptions<T> = {
    history: T[]; 
    feture: T[]; 
    position: number;
}
const useUndoRedo = <T>({ items }: UndoRedoProps<T>) => {
    const [options, setOptions ] = useState<UndoRedoOptions<T>>({ history: [], feture: [], position: 0  })

    const canRedo = () => {
        return options.feture.length == 0;
    }
    const canUndo = () => {
        return options.history.length == 0;
    }
      
    const addData = ({ items }: UndoRedoProps<T>) => {
        setOptions(state => ({ ...state,position: state.position + 1, history: [...state.history, ...items]}))
        
        if(options.feture.length > 0) {
           setOptions(state => ({ ...state, feture: [] }))
        }

    }
    const undo = () => {
        
        setOptions((state) => {
            
            const itemsInTheFeture = state.history.slice(state.history.length -1)
           state.history.pop()
          return {...state, position: state.position - 1, feture: [...state.feture, ...itemsInTheFeture]}
    })
    }

    const redo = () => {
         
        setOptions((state) => {
            const currentItem = state.feture.slice(state.feture.length -1)
            state.feture.pop()
            return (
                {
                    ...state,
                    history: [...state.history, ...currentItem],
                    position: state.position + 1                
                }
            )
        })
    }

    return { canRedo, canUndo, addData, undo, redo, ...options}

}
export default useUndoRedo;
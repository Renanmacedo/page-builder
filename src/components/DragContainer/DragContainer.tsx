import { PropsWithChildren } from "react"

type DragContainerProps = { 
    lock?: boolean;
} & PropsWithChildren<any>

const DragContainer = ( { lock, children }: DragContainerProps) => {

    return (
        <div className="container mx-auto h-full w-full bg-slate-100"> 
            {children}
        </div>
    )
}

export default DragContainer
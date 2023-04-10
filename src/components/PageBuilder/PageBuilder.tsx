import { PropsWithChildren } from "react"

type PageBuilderProps = { 
    lock?: boolean;
} & PropsWithChildren<any> & HTMLDivElement;

const PageBuilder = ( { lock, children, ...props }: PageBuilderProps) => {

    return (
        <div className="container mx-auto h-full w-full bg-slate-100" {...props}> 
            {children}
        </div>
    )
}

export default PageBuilder
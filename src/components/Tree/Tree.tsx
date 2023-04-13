import { PropsWithChildren } from "react";
import { HTMLPageBuildProps } from "../../types/types";
import { forwardRef } from "../../utils/forwardRef";

type TreeProps = { 
    onChange: (evt: any) => void
};
type TreeHtmlProps = HTMLPageBuildProps<'div'> 
    & PropsWithChildren<any>
    & TreeProps;

const Tree = forwardRef<'div', TreeHtmlProps>((props, ref) => {

    const AsComponent = props.as ?? 'div';
    return ( 
        <AsComponent ref={ref} {...props} />
    )
})

export default Tree;
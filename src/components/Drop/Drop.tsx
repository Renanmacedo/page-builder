
/** Montar as seções a partir dos components criados */

import { PropsWithChildren } from "react";
import { HTMLPageBuildProps } from "../../types/types";
import { forwardRef } from "../../utils/forwardRef";

/** adicionar os eventos para criar os components */
type DropProps = {};
type DropHtmlProps = HTMLPageBuildProps<'div'> & PropsWithChildren<any>;
const Drop = forwardRef<'div', DropHtmlProps>((props, ref) => {
    
    return (
        <div ref={ref} {...props} />
    )
})

export default Drop;
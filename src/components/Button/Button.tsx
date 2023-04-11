import { PropsWithChildren } from "react";
import { HTMLPageBuildProps } from "../../types/types";
import { forwardRef } from "../../utils/forwardRef";
const DEFAULT_TAG = 'button';
type ButtonHtmlProps = HTMLPageBuildProps<typeof DEFAULT_TAG>;
type ButtonComponentProps =  ButtonHtmlProps & PropsWithChildren<any>; 
const Button = forwardRef<'button', ButtonComponentProps>((props, ref) => (
        <button {...props} ref={ref}/>
))


export default Button;
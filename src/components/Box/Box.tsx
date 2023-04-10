
import  { HTMLPageBuildProps } from '../../types/types'
import { createComponent } from '../../utils/createComponent';
import { forwardRef } from '../../utils/forwardRef';

const DEFAULT_TAG = 'div';
type BoxProps = HTMLPageBuildProps<typeof DEFAULT_TAG>;


const Box = forwardRef<'div', BoxProps>((props, ref) => {
    const {as: AsComponent = DEFAULT_TAG } = props;
    const otherProps = { ...props, as: null}
    return  (<AsComponent  ref={ref} {...otherProps} /> )
});
export default Box;
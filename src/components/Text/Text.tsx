import { forwardRef } from "react";


const Text  = forwardRef((props, ref) => {

    const  { as: Component  = "p" } = props;


    return (
        <Component {...props} ref={ref} />
    )
     
});


export default Text;


const Text  = ({...props }) => {

    const  { as: Component  = "p" } = props;


    return (
        <Component {...props}> {props.text} </Component>
    )
     
};


export default Text;
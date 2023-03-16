

const Text  = ({...props }) => {

    const  { as: Component  = "p" } = props;


    return (
        <Component> {props.label} </Component>
    )
     
};


export default Text;
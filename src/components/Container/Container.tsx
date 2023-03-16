
const Container = ({ ...props}) => ( 
    <div className={props.class} key={props.key}>
        {props.label}
    </div>
);


export default Container;
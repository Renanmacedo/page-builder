
const Button = ({ ...props }) => (
        <button className={props.class} key={props.key}>{props.label}</button>
)


export default Button;
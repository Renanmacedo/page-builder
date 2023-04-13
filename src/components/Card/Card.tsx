import { useRef } from "react";
import useDrag from "../../hooks/useDrag";

const Card = () =>  { 

    const { draggable, element } = useDrag();
    return (
        <div className="w-50 h-40" ref={element} draggable> 
            Simple Card Test 
        </div>
    )
    
}


export default Card;
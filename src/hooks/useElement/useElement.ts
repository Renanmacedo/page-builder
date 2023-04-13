import { useCallback, useEffect, useState } from "react"



const useElement = (ref) => {

    const [isSelect, setIsActive] = useState<boolean>(false);

    const clickInElement = useCallback(() => {}, []);

    const clickOutElement = useCallback(() => {},[]);

    useEffect(() => {

    return () => {

    }
    }, [])
    return {
        ref
    }
}
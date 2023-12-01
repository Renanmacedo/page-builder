
type StateType = {
    componentProps: any;
    type: string;
    id: string;
};

type Action =  { 
    type: "DRAG_START" | "DRAG_END" | "DRAG_OVER" | "DRAG_DROP",
    payload: {
        [key: string]: any
    }
}

const INITIAL_STATE: StateType = {
    componentProps: {},
    type: '',
    id: ''
};

const reduce = (state: StateType = INITIAL_STATE, action: Action) => {

    switch(action.type) {

        case 'DRAG_START':
            return { ...state, ...action.payload};
        default:
            return state
    }
}

export default reduce;
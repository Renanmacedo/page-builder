
type StateType = {
    componentProps: any;
    type: string;
    id: string;
};

type Action =  { 
    type: "DRAG_START" | "DRAG_END" | "DRAG_OVER" | "DRAG_DROP"
}

const INITIAL_STATE: StateType = {
    componentProps: {},
    type: '',
    id: ''
};

const reduce = (state: StateType = INITIAL_STATE, action: Action) => {}

export default reduce;
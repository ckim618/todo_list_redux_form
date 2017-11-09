import types from '../actions/types';   

const DEFAULT_STATE = { all: [], single: null }

export default function(state = DEFAULT_STATE, action) {
    switch(action.type) {
        case types.GET_ALL:
            return {...state, all: action.payload.data.todos };
        case types.GET_SINGLE:
        case types.TOGGLE_COMPLETE:
            console.log('TOGGLE COMPLETE: ', action.payload);
            return {...state, single: action.payload.data.todo};    
        default:
            return state;
    }
}
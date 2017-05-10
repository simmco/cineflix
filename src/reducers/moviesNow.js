import { FETCH_MOVIES_NOW } from '../actions/types';

export default function(state = [], action) {
    switch(action.type){
        case FETCH_MOVIES_NOW:
            return action.payload;
        default:
            return state;
    }
}
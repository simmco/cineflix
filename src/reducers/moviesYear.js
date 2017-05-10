import { FETCH_MOVIES_YEAR } from '../actions/types';

export default function(state = [], action) {
    switch(action.type){
        case FETCH_MOVIES_YEAR:
            return action.payload;
        default:
            return state;
    }
}
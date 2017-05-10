import { FETCH_MOVIES_MOST_POPULAR } from '../actions/types';

export default function(state = [], action) {
    switch(action.type){
        case FETCH_MOVIES_MOST_POPULAR:
            return action.payload;
        default:
            return state;
    }
}
import { FETCH_MOVIES_MOST_POPULAR_KIDS } from '../actions/types';

export default function(state = [], action) {
    switch(action.type){
        case FETCH_MOVIES_MOST_POPULAR_KIDS:
            return action.payload;
        default:
            return state;
    }
}
import { FETCH_MOVIES_HIGHEST_RATED } from '../actions/types';

export default function(state = [], action) {
    switch(action.type){
        case FETCH_MOVIES_HIGHEST_RATED:
            return action.payload;
        default:
            return state;
    }
}
import { MOVIE_CLICKED, MOVIE_CLOSED } from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case MOVIE_CLICKED:
            return state;
        case MOVIE_CLOSED:
            return {};
        default:
            return state;
    }
}
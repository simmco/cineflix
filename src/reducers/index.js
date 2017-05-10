import { combineReducers } from 'redux';
import moviesNow from './moviesNow';
import moviesYear from './moviesYear';
import moviesHighestRated from './moviesHighestRated';
import moviesMostPopular from './moviesMostPopular';
import moviesMostPopularKids from './moviesMostPopularKids';
import movieSelected from './movieSelected';

const rootReducer = combineReducers({
    moviesNow,
    movieSelected,
    moviesYear,
    moviesHighestRated,
    moviesMostPopular,
    moviesMostPopularKids
});

export default rootReducer;

import { combineReducers } from 'redux';
import travelDetailsReducer from './travelDetailsReducers';

const rootReducer = combineReducers({
    travelDetails : travelDetailsReducer,
})

export default rootReducer;
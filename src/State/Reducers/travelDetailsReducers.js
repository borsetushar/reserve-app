import { TRAVEL_DETAILS } from "../Actions/Constants/travelDetais";


const INITIAL_STATE = {};

const travelDetailsReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case TRAVEL_DETAILS:
            return {
                ...state,
                formData: action.payload,
              };
        default:
            return state;    
    }
};

export default travelDetailsReducer;
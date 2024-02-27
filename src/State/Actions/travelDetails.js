import { TRAVEL_DETAILS } from "./Constants/travelDetais"


const travelDetails=(data)=>{
    return{
        type : TRAVEL_DETAILS,
        payload : data,
    }
};

export {travelDetails};
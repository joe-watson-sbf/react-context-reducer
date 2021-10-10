import {GET_COUNTRY, GET_COUNTRY_BY_REGION} from '../Type';

function CountryReducer(state, action) {
    
    const {type, payload} = action;

    switch (type) {
        case GET_COUNTRY:
            return {
                ...state,
                countries: payload,
                regionSelected: []
            }
        case GET_COUNTRY_BY_REGION:
            return {
                ...state,
                regionSelected: payload,
                countries: []
            }
    
        default:
            return state;
    }
}

export default CountryReducer;
import React, {useReducer} from 'react';
import CountryReducer from './CountryReducer';
import CountryContext from './CountryContext';
import axios from "axios";

const URI_API = 'https://restcountries.com/v3.1/';

const CountryState = (props)=>{

    const initialState = {
        countries: [],
        regionSelected: [],
        loading: true
    }

    const [state, dispatch] = useReducer(CountryReducer, initialState);
    


    const getCountries= async ()=>{

        const response = await axios.get(`${URI_API}/all`);

        const countryList = response.data.map(country =>{
            return coutryData(country);
        })

        dispatch({
            type: 'GET_COUNTRY',
            payload: countryList
        })

        errorMessage(response.status);

    }


    
    const getCountryByRegion= async (region) => {

        if(region==='all'){
            getCountries();
        }else{
            const response = await axios.get(`${URI_API}/region/${region}`);

            const countryList = response.data.map(country =>{
                return coutryData(country);
            })
            dispatch({
                type: 'GET_COUNTRY_BY_REGION',
                payload: countryList
            })

            errorMessage(response.status);
        }

    }
    

    const errorMessage=(res)=>{
        
        if(res===500){
            console.error("The API version is changed " +
            "please check the new version on this link https://restcountries.com ");
            console.error("And after, go to scr/Context/CountryState "+
            "on the 6° line and change the link address version.")
        }
    }
    const coutryData = (data)=>{
        return {
            nombre: data.name.official,
            nombreEs: data.translations.spa.common,
            capital: data.capital ? data.capital[0] : data.name.common,
            region: data.region,
            bandera: data.flags.png
        }
    }
    
    


    return(
        <CountryContext.Provider value={{
            countries: state.countries,
            regionSelected: state.regionSelected,
            loading: state.loading=true,
            getCountries,
            getCountryByRegion

        }}>
            {props.children}
        </CountryContext.Provider>
    )

}

export default CountryState;
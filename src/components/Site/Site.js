import React, {useEffect, useContext} from 'react';
import CountryContext from './../../Context/Country/CountryContext';
import ListCountry from '../ListCountry/ListCountry';
import {Container} from 'react-bootstrap';


const Site = () => {
    const { countries, getCountries, regionSelected} = useContext(CountryContext);

    useEffect(()=>{
        getCountries();
    }, []);

    return (
        
        <div>

            <Container fluid>
                <div className='w-60 m-5 flex-row justify-content-center'> 
                    {
                        countries && <ListCountry listCountries={countries} /> 
                    }

                    {
                        regionSelected && <ListCountry listCountries={regionSelected} /> 
                    }
                </div>
                </Container>
        </div>
    )
}

export default Site

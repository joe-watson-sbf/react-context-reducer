import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Country from './Country/Country';

const ListCountry = (props) => {

    
    return (

        <div>
            <div className='w-60 m-5 flex-row'> 

                <Row  xs={1} md={4} className="g-4">
                    {props.listCountries.map((country, index) => (
                        <Col key={index}>
                            <Country {...country}/>
                        </Col>
                    ))}
                </Row>
                
            </div>
        </div>
    )
}

export default ListCountry;

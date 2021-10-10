import React from 'react';
import {Card} from 'react-bootstrap';

const Country = (props) => {
    return (
        <Card >
            <Card.Img variant="top" src={props.bandera} />
            <Card.Body>
                <Card.Text className="text-center bg-gradient
                p-2"> <strong>{props.nombre} </strong></Card.Text>
                <Card.Text>
                    <strong>Nombre en Español: </strong> {props.nombreEs}
                </Card.Text>
                <Card.Text>
                    <strong>Capital: </strong> {props.capital}
                </Card.Text>
                <Card.Text>
                    <strong>Region: </strong> {props.region}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Country;
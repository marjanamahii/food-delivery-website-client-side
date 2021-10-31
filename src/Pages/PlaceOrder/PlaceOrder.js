import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://ghoulish-corpse-55272.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <h2>Details of: {service.name}</h2>
            <h2>This is orders id: {serviceId}</h2>
        </div>
    );
};

export default PlaceOrder;
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://ghoulish-corpse-55272.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services">
            <h2 className="text-primary mt-5">Pick a Dish Off Our Menu!</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
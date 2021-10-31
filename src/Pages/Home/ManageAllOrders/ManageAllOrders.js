import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://ghoulish-corpse-55272.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleCancelOrder = id => {
        const url = `https://ghoulish-corpse-55272.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }

            })
    }
    return (
        <div>
            <h2>Manage all orders</h2>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={() => handleCancelOrder(service._id)}>Cancel</button>
                </div>)
            }
        </div>
    );
};

export default ManageAllOrders;
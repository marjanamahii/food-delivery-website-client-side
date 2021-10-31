import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('https://ghoulish-corpse-55272.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    console.log(service)

    //delete all users booking 
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://ghoulish-corpse-55272.herokuapp.com/services/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingService = service.filter(book => book._id !== id)
                        setService(remainingService)
                    }
                })
        }
    }

    //update status

    const handleUpdate = id => {
        const url = `https://ghoulish-corpse-55272.herokuapp.com/services/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Status updated successfully');
                }

            })
    }

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Ordered Items</th>
                        <th>Date</th>
                        <th>Cost</th>
                        <th>Status</th>
                        <th>Update Status</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        service?.map(order => <tr key={service._id}>
                            <td>
                                {order.name}
                            </td>
                            <td>
                                {order.email}
                            </td>
                            <td>
                                {order.address}
                            </td>
                            <td>
                                {order.phone}
                            </td>
                            <td>
                                {order.orderitems}
                            </td>
                            <td>
                                {order.date}
                            </td>
                            <td>
                                {order.cost}
                            </td>
                            <td className="text-danger">
                                {order.status}
                            </td>
                            <td>
                                <i onClick={() => handleUpdate(service._id)} className="fas fa-check-circle text-success fs-5"></i>
                            </td>
                            <td>
                                <i onClick={() => handleDelete(service._id)} className="fas fa-trash text-danger fs-5"></i>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageAllOrders;
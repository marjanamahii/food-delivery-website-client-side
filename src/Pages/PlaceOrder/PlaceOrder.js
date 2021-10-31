import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const [service, setService] = useState({});
    const { serviceId } = useParams();
    useEffect(() => {
        const url = `https://ghoulish-corpse-55272.herokuapp.com/services/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const onSubmit = data => {
        console.log(data);

        axios.post('https://ghoulish-corpse-55272.herokuapp.com/placeorder', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    };

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <div className="row mt-5 ms-5">
                <div className="col-md-6">
                    <div>
                        <h3>{service.name}</h3>
                        <h3>${service.price}/per one</h3>
                        <p>{service.description}</p>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="booking">
                        <h2 className="text-center text-primary mb-4">Ordering Information</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" defaultValue={user.displayName} />
                            <input type="email" {...register("email")} placeholder="Email" defaultValue={user.email} />
                            <input type="text" {...register("title")} placeholder="Item name" defaultValue={service.name} />
                            <input type="number" {...register("price")} defaultValue={service.price} />
                            <input type="text" {...register("address")} placeholder="Address" required />
                            <input type="number" {...register("phone")} placeholder="Phone number" required />
                            <input type="date" {...register("date")} placeholder="date" required />
                            <input className="btn btn-primary" type="submit" value="Submit" />

                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default PlaceOrder;
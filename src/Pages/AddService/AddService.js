import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://ghoulish-corpse-55272.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    };
    return (
        <div className="add-service">
            <h2>Please add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image url" />
                <input className="p-1 mt-3 btn btn-danger" type="submit" />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />

            </form>
        </div>
    );
};

export default AddService;
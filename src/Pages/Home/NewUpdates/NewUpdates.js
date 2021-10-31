import React from 'react';
import './NewUpdates.css';

const NewUpdates = () => {
    return (
        <section className="position-relative">
            <div className="container py-4 py-lg-5">
                <div className="row align-items-center pb-lg-5">
                    <div className="col-12 text-center">
                        <h2 className="text-primary position-relative fs-35 fw-400 mb-5">
                            <span className="text-primarytitle-border mb-2 mb-lg-4 mt-0"></span>
                            <span>New Updates</span>
                        </h2>
                    </div>
                    <div className="col-md-6 text-center">
                        <figure className="position-relative d-flex align-items-center justify-content-center shadow-3 mb-4 mb-md-0">
                            <img src="https://i.ibb.co/PD4gm2t/food4.png" alt="Our Story" />

                        </figure>
                        <h2>Steak</h2>
                        <p>A steak is a meat generally sliced across the muscle fibers, potentially including a bone. It is normally grilled, though can also be pan-fried. Steak can also be cooked in sauce, such as in steak and kidney pie, or minced and formed into patties, such as hamburgers.</p>
                    </div>
                    <div className="col-md-6 text-center">
                        <figure className="position-relative d-flex align-items-center justify-content-center shadow-3 mb-4 mb-md-0">
                            <img src="https://i.ibb.co/B2xpyBD/sandwich.png" alt="Our Story" />

                        </figure>
                        <h2>Sandwich</h2>
                        <p>A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewUpdates;
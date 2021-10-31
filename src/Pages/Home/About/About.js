import React from 'react';
import './About.css';

const About = () => {
    return (
        <section class="position-relative about-us">
            <div class="container py-4 py-lg-5">
                <div class="row align-items-center pb-lg-5">
                    <div class="col-12 text-center">
                        <h2 class="text-primary position-relative fs-35 fw-400 mb-5">
                            <span class="text-primarytitle-border mb-2 mb-lg-4 mt-0"></span>
                            <span>About Us</span>
                        </h2>
                    </div>
                    <div class="col-md-6 text-center">
                        <figure class="position-relative d-flex align-items-center justify-content-center shadow-3 mb-4 mb-md-0">
                            <img src="https://i.ibb.co/jzn77H3/Restaurant-kitchen-crew-preparing-food.jpg" alt="Our Story" />

                        </figure>
                    </div>
                    <div class="col-md-6 fs-19 lh-15">
                        <p>We believe independent restaurants occupy a distinctive position in the world of business. They are visible, important and integral parts of the communities they serve. Unlike their chain counterparts, people often have a personal connection to one or more of their home grown restaurants. Independents have a local identity and are often one of the most tangible representations of an area's heritage, history and unique character. </p>
                        <p>While we recognize the risks, workload and challenges inherent in starting a restaurant, we believe there are proven insights and practices that can dramatically improve a restaurant's odds of success. This is what RestaurantOwner.com is all about -- dramatically improving your chances of real, sustainable restaurant and business success.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
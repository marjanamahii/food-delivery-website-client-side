import React from 'react';
import { Col, Image, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <div className="footer-area bg-dark py-50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                            <a href="/">
                                <Image src="" />
                            </a>
                            <div className="text-primary footer-left-info border-0">
                                <h1>Yummy Hut</h1>
                                <p>21st Century is proud to employ a team of 50+ full-time employees – each with a specific field of expertise.</p>

                            </div>
                        </div>
                        <Col md={6} lg={3} className="mb-3 mb-lg-0">
                            <div className="footer-content text-primary">
                                <h3>Our <span className="text-white">Shop</span></h3>
                                <div className="location">
                                    <i className="fa fa-map-marker mt-1" aria-hidden="true"></i>
                                    <p>1460 Broadway
                                        <br /> New York, NY 10036</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="mb-3 mb-lg-0">
                            <div className="footer-content text-primary">
                                <h3 className="fs-19 text-uppercase fw-500">Quick <span className="text-white">Links</span></h3>
                                <ListGroup>
                                    <Link to="#">Why Yummy Hut?</Link>
                                    <Link to="#">About Us</Link>
                                    <Link to="#">Services</Link>
                                    <Link to="#">Login</Link>
                                </ListGroup>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="mb-3 mb-lg-0">
                            <div className="footer-content text-primary">
                                <h3 className="fs-19 fw-500">Services <span className="text-white">Area</span></h3>
                                <ListGroup>
                                    <Link to="#">Private Duty Skilled Home</Link>
                                </ListGroup>
                            </div>
                        </Col>
                    </div>
                </div>
            </div>
            <footer className="bg-dark site-footer py-3">
                <div className="container">
                    <p className="text-center text-white text-sm-left">Copyright &copy; 2021 <a
                        href="/"><strong>Yummy Hut</strong></a>. All Rights reserved
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
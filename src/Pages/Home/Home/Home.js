import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner'
import NewUpdates from '../NewUpdates/NewUpdates';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <NewUpdates></NewUpdates>
            <About></About>
        </div>
    );
};

export default Home;
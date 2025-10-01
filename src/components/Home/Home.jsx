import React from 'react';
import Banner from '../Banner/Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import Feedback from '../Feedback/Feedback';

const Home = () => {

    const services = useLoaderData();
    const { servicesData, feedbackData } = services;

    return (
        <div className=''>
            <Banner></Banner>
            <div className='grid-cols-4 gap-6 grid'>
                {
                    servicesData.slice(0, 4).map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
            <button className='mx-auto btn btn-primary block mt-4'>
                <NavLink to='/allTreatments'>Show more</NavLink>
            </button>

            <Feedback feedbackData={feedbackData}></Feedback>

        </div>
    );
};

export default Home;
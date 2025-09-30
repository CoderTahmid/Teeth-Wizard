import React from 'react';
import Banner from '../Banner/Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Home = () => {

    const services = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className='grid-cols-4 gap-6 grid w-[80%] mx-auto max-w-[1200px] mt-6'>
                {
                    services.slice(0, 4).map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
            <button className='mx-auto btn btn-primary block mt-4'>
                <NavLink to='/allTreatments'>Show more</NavLink>
            </button>

        </div>
    );
};

export default Home;
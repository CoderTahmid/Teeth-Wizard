import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Home = () => {

    const services = useLoaderData();

    return (
        <div className='text-red-500 text-2xl'>
            <Banner></Banner>
            <div>
                {
                    services.map(service => <ServiceCard></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Home;
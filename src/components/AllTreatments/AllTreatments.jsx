import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllTreatments = () => {

    const services = useLoaderData();

    return (
        <div className='grid-cols-4 gap-6 grid w-[80%] mx-auto max-w-[1200px] mt-6'>
            {
                services.map(service => <ServiceCard service={service}></ServiceCard>)
            }
        </div>
    );
};

export default AllTreatments;
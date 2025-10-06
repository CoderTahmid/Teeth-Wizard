import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../Modal/Modal';

const Details = () => {

    const { cost, treatment, description, image } = useLoaderData();

    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    `url(${image})`,
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
                    <p className="mb-5">{description}</p>
                    <button className="btn btn-primary"><label htmlFor="my_modal_6" >Book appointment</label></button>
                </div>
            </div>
            <Modal></Modal>
        </div>
    );
};

export default Details;
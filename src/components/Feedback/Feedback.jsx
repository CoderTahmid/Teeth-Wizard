import React from 'react';

const Feedback = ({ feedbackData }) => {

    // const { name, review, userImage } = feedbackData;

    return (
        <div className='grid grid-cols-3 mx-auto gap-6 mt-6'>
            {
                feedbackData.map(feed => <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <div className='flex items-center justify-between'>
                            <img src={feed.userImg} className='w-12 h-12 rounded-full' alt="" />
                            <h2 className="card-title ml-4">{feed.name}</h2>
                            <p className='text-right'>{new Date().toLocaleDateString()}</p>
                        </div>
                        <p>{feed.review}</p>
                        <div className="card-actions justify-end items-center">
                            <div className="rating">
                                <div className="mask mask-star" aria-label="1 star"></div>
                                <div className="mask mask-star" aria-label="2 star"></div>
                                <div className="mask mask-star" aria-label="3 star" aria-current="true"></div>
                                <div className="mask mask-star" aria-label="4 star"></div>
                                <div className="mask mask-star" aria-label="5 star"></div>
                            </div>  
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Feedback;
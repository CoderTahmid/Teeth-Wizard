import React from 'react';
import "./Navbar.css"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='min-h-20 bg-blue-900 text-white items-center flex'>
            <div className='flex justify-between items-center w-[95%] mx-auto h-full'>
                <div>
                    <h1 className='text-xl font-extrabold'>TEETH WIZARD</h1>
                </div>
                <div className='space-x-4'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/allTreatments'>All treamments</NavLink>
                    <NavLink to='/myAppointments'>My appointments</NavLink>
                    <NavLink to='/profile'>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='/login'><button className='btn btn-primary'>Login</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
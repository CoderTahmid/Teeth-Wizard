import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { NavLink } from 'react-router-dom';

const Login = () => {

    const {handleGoogleLogin} = useContext(authContext);

    return (
        <div className='text-black'>
            <button className='btn btn-primary' onClick={handleGoogleLogin}>Google login</button>
            New to website? Please <NavLink to='/register'>register</NavLink>
        </div>
    );
};

export default Login;
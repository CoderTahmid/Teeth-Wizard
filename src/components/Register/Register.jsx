import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const Register = () => {

    const {handleRegister} = useContext(authContext);

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conPassword = e.target.conPassword.value;
        console.log(name, image, email, password, conPassword);

        handleRegister(email, password);
    }

    return (
        <div className='text-black'>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    Name <input type="text" name='name'/>
                </div>
                <div>
                    Image <input type="text" name='image'/>
                </div>
                <div>
                    Email <input type="text" name='email' />
                </div>
                <div>
                    password <input type="text" name='password'/>
                </div>
                <div>
                    Confirm password <input type="text" name='conPassword' />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default Register;
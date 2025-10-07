import React from 'react';

const Modal = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <form action="" onSubmit={handleSubmit}>
                        <div>
                            First name
                            <input type="text" placeholder="Type here" className="input" name='Fname'/>
                        </div>
                        <div>
                            Last name
                            <input type="text" placeholder="Type here" className="input" name='Lname'/>
                        </div>
                        <div>
                            Email
                            <input type="text" placeholder="Type here" className="input" name='email' />
                        </div>
                        <div>
                            Phone number
                            <input type="text" placeholder="Type here" className="input" name='phone'/>
                        </div>
                        <div>
                            Appointment date
                            <input type="date" placeholder="Type here" className="input" name='date'/>
                        </div>
                        <div>
                            Address
                            <input type="text" placeholder="Type here" className="input" name='address'/>
                        </div>
                        <button className='btn-primary btn' type='submit'>Make Appointments</button>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
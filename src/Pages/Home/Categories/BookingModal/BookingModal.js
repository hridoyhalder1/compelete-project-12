import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';

const BookingModal = ({ productss }) => {
    const {user} = useContext(AuthContext);
    const { name, location } = productss;

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-3">{name}</h3>
                    <form className='grid grid-cols-1 gap-3'>
                        <input type="text" value={user?.displayName} className="input input-bordered w-full " />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                        <br/>
                        <input className='btn btn-primary w-full ' type="button" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
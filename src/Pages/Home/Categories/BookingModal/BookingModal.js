import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../context/AuthProvider';

const BookingModal = ({ productss, setProductss }) => {
    const {user} = useContext(AuthContext);
    const { name, location, resalePrice } = productss;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const location = form.location.value;
        const price = form.price.value;
        const number = form.number.value;

        // console.log(name, email, location, price, number);

        const booking = {
            name,
            email,
            location,
            price,
            number
        }
        console.log(booking);
        toast.success('Booking Successfully!');
        setProductss(null);

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-3">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input type="text" name='name' disabled   value={ user?.displayName} className="input input-bordered w-full " />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full " />
                        <input type="text" name='location' disabled value={location} className="input input-bordered w-full " />
                        <input type="text" name='price' disabled value={resalePrice} className="input input-bordered w-full " />
                        <input type="number" name='number' placeholder="enter Your Phone Number" className="input input-bordered w-full " />
                        <br/>
                        <input className='btn btn-primary w-full ' type="submit" value="Submit" />  
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
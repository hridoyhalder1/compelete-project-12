import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyOrder = () => {

    const {user} = useContext(AuthContext);

    const url =`https://final-assignment-server-site.vercel.app/bookings?displayName=${user?.displayName}`;
    // console.log(url);

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.displayName],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })


    return (
        <div>
            <h2 className=' text-4xl mb-5'>My Order</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th>Products</th>
                            <th>Location</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {   bookings &&
                            bookings?.map(( booking, i) =>
                            <tr
                            key={booking._id}
                            >
                                <th>{i+1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.productss}</td>
                                <td>{booking.location}</td>
                                <td>{booking.price}</td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;
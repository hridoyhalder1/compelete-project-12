import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import Infos from './Infos';


const CompanyInfo = () => {

    const CompanyData = [
        {
            id: 1,
            name: 'Duration',
            description: 'Open 8 am & close 10 pm everyday',
            icon: clock,
            bg: "bg-gradient-to-r from-violet-500 to-fuchsia-500"
            
        },
        {
            id: 2,
            name: 'Our Location',
            description: '4004 Valley Drive Philadelphia, PA 19108',
            icon: marker,
            bg: "bg-gradient-to-r from-cyan-500 to-blue-500"
        },
        {
            id: 3,
            name: 'Phone Number',
            description: '+1267-280-8029 & +1906-635-2003',
            icon: phone,
            bg: 'bg-gradient-to-r from-purple-500 to-pink-500'
        },
    ]



    return (
        <div className='mb-11'>
            <h2 className=' text-center font-bold text-4xl mb-12 '>Our Company Info</h2>
            <div className=' grid  grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    CompanyData.map(card => <Infos
                        key={card.id}
                        card={card}
                    ></Infos>)
                }
            </div>
        </div>
    );
};

export default CompanyInfo;
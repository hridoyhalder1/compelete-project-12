import React from 'react';
import img1 from '../../../assets/newimg/testimonial-1.png';
import img2 from '../../../assets/newimg/testimonial-2.jpg';
import img3 from '../../../assets/newimg/testimonial-3.jpg';
import Infos from './Infos';


const CompanyInfo = () => {

    const CompanyData = [
        {
            id: 1,
            name: 'Sufana ',
            description: 'This is the best store to shop for used goods. ',
            icon: img1,
            bg: "bg-gradient-to-r from-violet-500 to-fuchsia-500"
            
        },
        {
            id: 2,
            name: 'Mike Hussy',
            description: ' I love the way their items are laid out and the selection available. I can get a wide variety of items for cheap prices.',
            icon: img2,
            bg: "bg-gradient-to-r from-cyan-500 to-blue-500"
        },
        {
            id: 3,
            name: 'Sufiana Sufi',
            description: 'This is the best store to shop for used goods. I love the way their items are laid out and the selection available. ',
            icon: img3,
            bg: 'bg-gradient-to-r from-purple-500 to-pink-500'
        },
    ]



    return (
        <div className='mb-11'>
            <h2 className=' text-center font-bold text-4xl mb-12 '>Our Customer Review</h2>
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
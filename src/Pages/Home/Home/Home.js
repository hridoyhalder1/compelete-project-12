import React from 'react';
import Banner from '../Banner/Banner';
import CompanyInfo from '../CompanyInfo/CompanyInfo';

const Home = () => {
    return (
        <div className=' mx-5'>
            <Banner></Banner>
            <CompanyInfo></CompanyInfo>
        </div>
    );
};

export default Home;
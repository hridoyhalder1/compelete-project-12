import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import CompanyInfo from '../CompanyInfo/CompanyInfo';

const Home = () => {
    return (
        <div className=' mx-5'>
            <Banner></Banner>
            <CompanyInfo></CompanyInfo>
            <Categories></Categories>
        </div>
    );
};

export default Home;
import React from 'react';
import bannerImg from '../../../assets/banner/Best-Android-Phones-Header-1536x962.webp';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen mb-14">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImg} className=" md:w-1/2 rounded-lg shadow-2xl"  alt=''/>
                    <div>
                        <h1 className="text-5xl font-bold">Best Used Andriod Phones</h1>
                        <p className="py-6">Get the best phone with affordable price!!!</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
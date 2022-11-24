import React from 'react';

const Infos = ({card}) => {
    const {name, description, icon, bg} = card;
    return (
        <div>
           <div className={`card md:card-side text-white p-6 bg-base-100  shadow-xl ${bg}`}>
                <figure><img src={icon} alt="" className=' w-24' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>                    
                </div>
            </div> 
        </div>
    );
};

export default Infos;
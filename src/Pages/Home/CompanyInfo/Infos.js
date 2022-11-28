import React from 'react';

const Infos = ({ card }) => {
    const { name, description, icon, bg } = card;
    return (
        <div>
            <div className={`card md:card-side text-white p-6 bg-base-100  shadow-xl flex flex-wrap ${bg}`}>
                <figure><img src={icon} alt="" className=' w-24 rounded-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Infos;
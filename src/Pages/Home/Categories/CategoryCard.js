import React from 'react';

const CategoryCard = ({category}) => {
    const {title, img} = category;
    return (
        <div>
            <div className="card  w-96 bg-base-100 shadow-xl ">
                <figure><img src={img} className='w-3/4' alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Click Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
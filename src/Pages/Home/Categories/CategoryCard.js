import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { title, img, _id }= category;
    return (
        <div>
            <div className="card  w-96 bg-base-100 shadow-xl ">
                <figure><img src={img} className='w-3/4' alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/products/${_id}`}>
                            <button className="btn btn-primary">Click Me</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
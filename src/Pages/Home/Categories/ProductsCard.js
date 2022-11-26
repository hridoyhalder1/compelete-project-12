import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ product }) => {

    const { name, picture, location, resalePrice, orginalPrice, use, seller } = product

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" className=' w-3/4' /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Seller: {seller}</p>
                <div className="card-actions ">
                    <div className="badge badge-outline">Orginal Price: {orginalPrice}</div>
                    <div className="badge badge-outline">Resale Price: {resalePrice}</div>
                    <div className="badge badge-outline">Used:{use}</div>
                    <div className="badge badge-outline">Location: {location}</div>
                </div>
                <div className="card-actions justify-end pt-3">
                    <button className="btn btn-md btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;
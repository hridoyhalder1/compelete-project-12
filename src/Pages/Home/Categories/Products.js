import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const {name} = useLoaderData();
    return (
        <div>
            <h2>Available Products</h2>
            <h2>Name:{name}</h2>
        </div>
    );
};

export default Products;
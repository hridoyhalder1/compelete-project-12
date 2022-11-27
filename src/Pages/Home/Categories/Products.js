import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import ProductsCard from './ProductsCard';

const Products = () => {
    const { products } = useLoaderData();
    const [productss, setProductss] = useState(null);
    return (
        <div className=' mb-12'>
            <h2 className=' text-center text-3xl font-bold mb-7'>Available Products</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-10 justify-items-center'>
                {
                    products.map(product => <ProductsCard
                        key={product._id}
                        product={product}
                        setProductss={setProductss}
                    >

                    </ProductsCard>)
                }
            </div>
            {   
                productss &&
                <BookingModal
                    productss={productss}
                ></BookingModal>
            }
        </div>
    );
};

export default Products;
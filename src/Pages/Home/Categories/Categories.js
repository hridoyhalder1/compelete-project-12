import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {

    const [categories, setCategories] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, []);
    

    return (
        <div className='mb-12'>
            <h2 className="text-4xl font-bold text-center my-16 ">Products Category</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
                {
                    categories.map(category => <CategoryCard
                    key={category._id}
                    category={category}
                    >

                    </CategoryCard>)
                }
                
            </div>
            
        </div>
    );
};

export default Categories;
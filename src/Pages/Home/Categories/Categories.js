import { useQuery } from '@tanstack/react-query';
import CategoryCard from './CategoryCard';

const Categories = () => {

    // const [categories, setCategories] = useState([]);

    const {data:categories = []} = useQuery({
        queryKey: ['categories'],
        queryFn: async() => {
            const res = await fetch('https://final-assignment-server-site.vercel.app/category');
            const data = await res.json();
            return data;
        }
    })





    // useEffect( () => {
    //     fetch('https://final-assignment-server-site.vercel.app/category')
    //     .then(res => res.json())
    //     .then(data => setCategories(data))
    // }, []);
    

    return (
        <div className='mb-12'>
            <h2 className="text-4xl font-bold text-center my-16 ">Products Category</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
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
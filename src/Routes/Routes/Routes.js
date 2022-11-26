import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Products from "../../Pages/Home/Categories/Products";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/products/:id',
                element: <Products></Products>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    }
])

export default router;
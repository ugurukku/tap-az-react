import {createBrowserRouter, Navigate} from 'react-router-dom';
import AddNewProduct from '../pages/AddNewProduct';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import ProductDetail from '../pages/ProductDetail';
import Register from '../pages/Register';

export const router = createBrowserRouter([
{
    path:'/',
    element: <Navigate to={"/products"} ></Navigate>
},
{
    path:'/products',
    element:<HomePage/>
},
{
    path:'/products/:id',
    element:<ProductDetail/>
},
{
    path:'/newProduct',
    element:<AddNewProduct/>
},
{
    path:'/register',
    element:<Register/>
},{
    path:'/login',
    element:<Login/>
},

{
    path:'*',
    element:<NotFound></NotFound>
}
]
);
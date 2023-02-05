import {createBrowserRouter, Navigate} from 'react-router-dom';
import AddNewProduct from '../pages/AddNewProduct';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import ProductDetail from '../pages/ProductDetail';

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
    path:'*',
    element:<NotFound></NotFound>
}
]
);
import {createBrowserRouter, Navigate} from 'react-router-dom';
import AddNewProduct from '../pages/AddNewProduct';
import ProductList from '../pages/ProductList';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import ProductDetail from '../pages/ProductDetail';
import Register from '../pages/Register';
import Verify from '../pages/Verify';
const userInfo = JSON.parse(localStorage.getItem("user"));


export const router = createBrowserRouter([
{
    path:'/',
    element: <Navigate to={"/products"} ></Navigate>
},
{
    path:'/products',
    element:<ProductList></ProductList>
},
{
    path:'/products/:id',
    element:<ProductDetail/>
},
{
    path:'/new-product',
    element: <AddNewProduct/>
},{
    path:'/my-products',
    element: <ProductList user_id={userInfo.id}/>
},{
    path:'/my-products/:id',
    element: <ProductDetail/>
},
{
    path:'/register',
    element:<Register/>
},{
    path:'/login',
    element:<Login/>
},{
    path:'/register/verify',
    element:<Verify/>
},

{
    path:'*',
    element:<NotFound></NotFound>
}
]
);
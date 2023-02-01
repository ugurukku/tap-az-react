import {createBrowserRouter} from 'react-router-dom';
import AddNewProduct from '../pages/AddNewProduct';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import ProductDetail from '../pages/ProductDetail';

export const router = createBrowserRouter([
{
    path:'/',
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
// {
//     path:'/vega-home',
//     element:<VegaHome/>
// },
{
    path:'*',
    element:<NotFound></NotFound>
}
]
);
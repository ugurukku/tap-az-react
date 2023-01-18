import {createBrowserRouter} from 'react-router-dom';
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
    path:'*',
    element:<NotFound></NotFound>
}
]
);
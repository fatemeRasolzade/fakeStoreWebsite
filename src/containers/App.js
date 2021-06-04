import React from 'react';
import Mainlayout from '../layouts/Mainlayout';
import { Switch, Route } from 'react-router-dom';
import Products from '../components/products/Products';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import { useSelector } from 'react-redux';
import { paginate } from './../Utils/paginate';
import AllProducts from './../components/products/AllProducts';
import Product from '../components/products/Product';
import AboutUs from './../components/common/AboutUs';

const App = () => {

    const products = useSelector(state => state.products);

    const indexProducts = paginate(products, 1, 6);

    return ( 
        <div>
            <Mainlayout>
                <Switch>
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/product/:id" component={Product} />
                    <Route path="/allproducts" component={AllProducts} />
                    <Route path="/" exact 
                        render={() => <Products products={indexProducts}/>}
                    />
                </Switch>
            </Mainlayout>
        </div>
     );
}
 
export default App;
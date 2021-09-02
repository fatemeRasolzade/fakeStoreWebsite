import React from 'react';
import Mainlayout from './layouts/Mainlayout';
import { Switch, Route, Router } from 'react-router-dom';
import Products from './components/products/Products';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { useSelector } from 'react-redux';
import { paginate } from './Utils/paginate';
import AllProducts from './components/products/AllProducts';
import Product from './components/products/Product';
import AboutUs from './components/common/AboutUs';
import Cart from './components/common/Cart';
import NotFound from './components/common/NotFound';
import history from './Utils/history';
// import PrivateRoute from './components/login/PrivateRoute';
// import Notification from './Utils/Notification';

const App = () => {

    const products = useSelector(state => state.Products.products);

    const indexProducts = paginate(products, 1, 6);

    return ( 
        <div>
            {/* <Notification/> */}
            <Router history={history}>
                <Mainlayout>
                    <Switch>
                        <Route path="/cart/:id" component={Cart} />
                        <Route path="/about-us" component={AboutUs} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/product/:id" component={Product} />
                        <Route path="/allproducts" component={AllProducts} />
                        <Route path="/" exact 
                            render={() => <Products products={indexProducts}/>}
                        />
                        <Route path="*" exact component={NotFound} />
                        {/* <PrivateRoute path="/dashboard" component={}/> */}
                    </Switch>
                </Mainlayout>
            </Router>
        </div>
     );
}
 
export default App;
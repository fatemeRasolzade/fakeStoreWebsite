import React from 'react';
import Mainlayout from '../layouts/Mainlayout';
import { Switch, Route } from 'react-router-dom';
import Products from '../components/products/Products';
import Login from '../components/login/Login';
import Register from '../components/register/Register';

const App = () => {
    return ( 
        <div>
            <Mainlayout>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/" exact component={Products} />
                </Switch>
            </Mainlayout>
        </div>
     );
}
 
export default App;
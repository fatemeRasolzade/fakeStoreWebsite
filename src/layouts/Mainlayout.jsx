import React from 'react';
import { withRouter } from 'react-router-dom';

import Nav from '../components/common/Nav';
import Header from './../components/common/Header';
import Footer from './../components/common/Footer';


const Mainlayout = props => {

    const { pathname } = props.location;

    return ( 
        <div>
            <Nav/>
            {pathname === "/" ? <Header/> : null}
                <div>
                    {props.children}
                </div>
            {pathname === "/" ? <Footer/> : null}
        </div>
     );
}
 
export default withRouter(Mainlayout);
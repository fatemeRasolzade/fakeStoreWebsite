import React from 'react';
import { withRouter } from 'react-router-dom';
import Nav from '../components/common/Nav';
import Header from './../components/common/Header';
import Footer from './../components/common/Footer';


const Mainlayout = props => {

    const { pathname } = props.location;

    return ( 
        <div className="d-flex flex-column justify-content-between" style={{minHeight: '100vh'}}>
            <div>
                <Nav/>
                {pathname === "/" ? <Header/> : null}
                    <div>
                        {props.children}
                    </div>
            </div>
            {pathname === "/" || "/allproducts" ? <Footer/> : null}
        </div>
     );
}
 
export default withRouter(Mainlayout);
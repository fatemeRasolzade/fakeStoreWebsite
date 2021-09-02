import React from 'react';
import Helmet from 'react-helmet';

const Header = () => {
    return ( 
        <header className="header">
            <div className="container-fluid">
                <Helmet>
                    <title>FAKESTORE</title>
                </Helmet>
                <div className="row header-banner align-items-center">
                    <div className="col col-6 mx-auto text-center">
                        <div>
                            <h1 className="logo">FAKESTORE</h1>
                            <h3>لورم ایپسوم متن ساختگی </h3>
                            <p className="pt-2 pb-5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است </p>
                        </div>
                        <form className="position-relative">
                            <input className="search-input" type="text" placeholder="دنبال چی میگردی؟"/>
                            <button className="search-btn" type="submit">
                                <span className="fa fa-search"></span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;
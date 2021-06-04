import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Products = ({location,products}) => {
    return ( 
        <main className="main">
            <div className="container">
                {location.pathname === "/" 
                    ? (<div className="text-center pt-5">
                        <Link to="/allproducts" className="dark-link">مشاهده همه ی کالاها</Link></div>)
                    : null
                }
                <div className="row py-5">
                    {products.map(product => (
                        <div key={product.id} className="col mx-auto my-4 col-md-6 col-lg-4">
                            <div className="card rounded-0">
                                <Link to={`/product/${product.id}`}><img src="img/771796.png" className="card-img-top card-img rounded-0" alt="" /></Link>
                                <div className="card-body">
                                    <div className="card-info d-flex justify-content-between">
                                        <Link to={`/product/${product.id}`} className="dark-link"><h5>محصول{product.id}</h5></Link>
                                        <h5>${product.price}</h5>
                                    </div>
                                     <div className="d-flex justify-content-center">
                                        <Link to={`/product/${product.id}`} className="dark-btn" type="submit">مشاهده جزئیات</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
 
export default withRouter(Products);


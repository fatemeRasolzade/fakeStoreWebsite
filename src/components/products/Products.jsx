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
                                <Link to={`/product/${product.id}`}><img src={product.image} className="card-img-top card-img w-100 rounded-0 img-height" alt="" /></Link>
                                <div className="card-body">
                                    <div className="card-info">
                                        <h5><Link to={`/product/${product.id}`} className="dark-link hidden">{product.title}</Link></h5>
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


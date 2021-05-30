import React from 'react'

const Products = () => {
    return ( 
        <main className="main">
            <div className="container">
                <div className="text-center pt-5">
                    <a href="#" className="dark-link">مشاهده همه ی کالاها</a>
                </div>
                <div className="row py-5">
                    <div className="col mx-auto my-4 col-md-6 col-lg-4">
                        <div className="card rounded-0">
                            <a href="#"> <img src="img/771796.png" className="card-img-top card-img rounded-0" alt="" /></a>
                            <div className="card-body">
                                <div className="card-info d-flex justify-content-between">
                                    <a href="#" className="dark-link"><h5>نام محصول</h5></a>
                                    <h5>$قیمت</h5>
                                </div>
                                 <div className="d-flex justify-content-center">
                                    <button className="dark-btn">مشاهده جزئیات</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default Products;
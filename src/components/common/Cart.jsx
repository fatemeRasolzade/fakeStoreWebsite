import React,{ useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../../redux/actions/cartAction';
// import { addToCart } from '../../redux/actions/cartAction';
import LoadingBar from '../../Utils/LoadingBar';

const Cart = ({match}) => {

    const [loading, setLoading] = useState(false);

    const cart = useSelector((state) => state.Cart);
    
    const dispatch = useDispatch();

    // useEffect(() => {
    //     initCart();
    // }, []);
    
    // const initCart = async () => {
    //     setLoading(true)
    //     await dispatch(addToCart(match.params.id));
    //     setLoading(false)
    // }

    return (
        <main className="main">
            <Helmet>
                <title>FAKESTORE | Product</title>
            </Helmet>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb p-0 my-4">
                        <li class="breadcrumb-item"><Link to="/" className="dark-link"> صفحه اصلی </Link></li>
                        <li class="breadcrumb-item"><Link to="/allproducts" className="dark-link"> لیست تمامی محصولات </Link></li>
                        <li class="breadcrumb-item active" aria-current="page"> سبد خرید </li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-12 col-lg-4  my-4">
                        <div className="product-info mx-auto text-right">
                            مجموع قیمت : {cart.reduce((acc, item) => acc + item.price , 0)}
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 text-center my-4">
                        {cart.length === 0 ?
                            <div className="text-center pt-3">
                                <p>سبد خرید خالی می باشد</p>
                                <Link to="/allproducts" className="dark-link">مشاهده همه محصولات</Link>
                            </div>
                            : (
                            <div>
                                {loading ? 
                                    <LoadingBar/>
                                    :
                                    cart.map((item)=> (
                                        <div  key={item.productId} class="card cart-body mb-5">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="card-body text-end rounded-0 mb-5">
                                                        <h5 className="card-title pr-4 pt-2">{item.title}</h5>
                                                        <p className="card-text pr-4">${item.price}</p>
                                                    </div>
                                                    <button
                                                        onClick={() => dispatch(removeFromCart(item.productId))}
                                                        className="dark-btn mt-5"
                                                    >
                                                        حذف از سبد خرید
                                                    </button>
                                                </div>
                                                <div className="col-4">
                                                    <img className="img-fluid product-img cart-height rounded-0" src={item.image} alt="product"/>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )}
                    </div>
                </div>
            </div>       
        </main>
     );
}
 
export default Cart;
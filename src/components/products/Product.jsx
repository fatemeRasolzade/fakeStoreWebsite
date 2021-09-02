import React,{ useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { getSingleProduct } from '../../redux/actions/productsAction';
import LoadingBar from '../../Utils/LoadingBar';

const Product = ({history, match}) => {

    const [loading, setLoading] = useState(false);

    const product = useSelector(state => state.Products.productDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        handleLoading();
    }, []);

 const handleLoading = async () => {
        setLoading(true)
        await dispatch(getSingleProduct(match.params.id));
        setLoading(false)
    }

    return ( 
        <main className="main">
            <div className="container">
                <Helmet>
                    <title>FAKESTORE | Product</title>
                </Helmet>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb p-0 my-4">
                        <li class="breadcrumb-item"><Link to="/" className="dark-link"> صفحه اصلی </Link></li>
                        <li class="breadcrumb-item"><Link to="/allproducts" className="dark-link"> لیست تمامی محصولات </Link></li>
                        {/* {product &&  */}
                            <li class="breadcrumb-item active" aria-current="page"> {product.title} </li>
                        {/* } */}
                    </ol>
                </nav>
                <div className="row my-5 justify-content-center">
                    <div className="col-11 col-md-5 col-lg-4  my-4">
                        <div className="product-info mx-auto">
                            <div className="d-flex justify-content-start">
                                <i className="fa fa-check"></i><p className="pr-1">گارانتی سلامت فیزیکی کالا</p>
                            </div>
                            <div className="d-flex justify-content-start">
                                <i className="fa fa-check"></i><p className="pr-1">ضمانت اصل بودن کالا</p>
                            </div>
                            <div className="d-flex justify-content-start">
                                <i className="fa fa-check"></i><p className="pr-1">ضمانت تعویض کالا</p>
                            </div>
                            <div className="d-flex justify-content-start">
                                <i className="fa fa-check"></i><p className="pr-1">امکان پرداخت در محل</p>
                            </div>
                            <div className="d-flex justify-content-start">
                                <i className="fa fa-check"></i><p className="pr-1">موجود در انبار</p>
                            </div>
                        </div>
                    </div>
                    {/* {product ?  */}
                        <div className="col-11 col-md-6 col-lg-5 text-center my-4">
                            {loading ? 
                                <LoadingBar/>
                            : null}
                            <img className="img-fluid w-100" src={product.image}/>
                            <div className="text-end">
                                <h2 className="pt-3">{product.title}</h2>
                                <h5 className="pt-1">${product.price}</h5>
                                <p className="text-justify pt-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.د.</p>
                            </div>
                            <button
                                onClick={() => {
                                            history.push(`/cart/${match.params.id}`);
                                        }}
                                className="dark-btn">
                                افزودن به سبد خرید
                            </button>
                        </div>
                        {/* : */}
                        {/* <p>یافت نشد</p> */}
                    {/* } */}
                </div>
            </div>
        </main>
    );
}
 
export default Product;
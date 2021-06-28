import React,{ useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleProduct } from './../../actions/product';
import { addToCart } from './../../actions/cart';
import { Link } from 'react-router-dom';

const Product = ({history, match}) => {

    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSingleProduct(match.params.id));
    }, []);

    return ( 
        <main className="main">
            <div className="container">
                <Helmet>
                    <title>FAKESTORE | Product</title>
                </Helmet>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb p-0 my-4">
                        <li class="breadcrumb-item"><Link to="/" className="dark-link"> صفحه اصلی </Link></li>
                        <li class="breadcrumb-item"><Link to="/" className="dark-link"> لیست تمامی محصولات </Link></li>
                        <li class="breadcrumb-item active" aria-current="page"> {product.title} </li>
                    </ol>
                </nav>
                <div className="row my-5">
                    <div className="col-12 col-md-5 col-lg-4  my-4">
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
                    <div className="col-12 col-md-7 col-lg-8 text-center my-4">
                        <img className="img-fluid w-100 product-img" src={product.image}/>
                        <div className="text-end">
                            <h2 className="pt-3">{product.title}</h2>
                            <h5 className="pt-1">${product.price}</h5>
                            <p className="text-justify pt-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        </div>
                        <button
                            onClick={() => {
                                        dispatch(addToCart(product.id));
                                        history.push(`/cart/${match.params.id}`);
                                    }}
                            className="dark-btn">
                            افزودن به سبد خرید
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default Product;
import React from 'react'

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="row pb-5">
                    <div className="col col-12  col-xl-6 text-right pt-5">
                        <p>خبرنامه</p>
                        <p>با عضویت در خبرنامه از جدیدترین محصولات ما مطلع شوید</p>
                        <form className="my-4">
                            <input type="text" className="footer-input" placeholder="لطفا ایمیل خود را وارد کنید" />
                            <button type="submit" className="mt-2 mt-sm-0 text-uppercase light-btn"> ثبت نام </button>
                        </form>
                    </div>
                    <div className="col col-12 col-xl-6 text-right d-flex  justify-content-around pt-5">
                        <p className="d-inline">ما را در شبکه های مجازی دنبال کنید</p>
                        <div>
                            <a href="#" className="footer-socialmedia fa fa-instagram"></a>
                            <a href="#" className="footer-socialmedia fa fa-youtube"></a>
                            <a href="#" className="footer-socialmedia fa fa-twitter"></a>
                            <a href="#" className="footer-socialmedia fa fa-facebook"></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;
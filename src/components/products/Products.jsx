import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import LoadingBar from "../../Utils/LoadingBar";
// import 1 from "../../assets/img/1.jpg";

const Products = ({ location, products }) => {
  const [loading, setLoading] = useState(false);

  // const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true);
    // initProducts()
    setLoading(false);
  }, []);

  // const initProducts = async () => {
  //     await dispatch(getAllProducts())
  // }

  return (
    <main className="main">
      <div className="container">
        {location.pathname === "/" ? (
          <div className="text-center pt-5">
            <Link to="/allproducts" className="dark-link fs-4">
              مشاهده همه ی کالاها
            </Link>
          </div>
        ) : null}
        <div className="row py-5">
          {loading ? <LoadingBar /> : null}
          {products.map((product) => (
            <div key={product.id} className="col mx-auto my-3 col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="card">
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} className="card-img-top card-img  img-height" alt="" />
                  </Link>
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="card-info">
                    <h6>
                      <Link to={`/product/${product.id}`} className="dark-link hidden">
                        {product.title}
                      </Link>
                    </h6>
                    <h6>${product.price}</h6>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Link to={`/product/${product.id}`} className="dark-btn" type="submit">
                      مشاهده جزئیات
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default withRouter(Products);

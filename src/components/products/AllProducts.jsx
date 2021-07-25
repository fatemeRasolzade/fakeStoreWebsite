import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { orderBy } from 'lodash';
import { paginate } from '../../Utils/paginate';
import Pagination from '../common/Pagination';
import Products from './Products';

const AllProducts = () => {

    const [perPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);
    const [productList, setProductList] = useState([]);
    const [search, setSearch] = useState("");

    const products = useSelector(state => state.Products.products);
    console.log(products);
    

    const handlePageChange = page => {
        setCurrentPage(page);
    }

    useEffect(() => setProductList(products), [products]);

    const filteredProducts = productList.filter((product) =>
        product.title.includes(search)
    );

    const allProducts = paginate(filteredProducts, currentPage, perPage);

    const sortProductDefault = () => {
        setProductList(orderBy(productList, "id", "asc"));
    }

    const sortProductAsc = () => {
        setProductList(orderBy(productList, "price", "asc"));
    }

    const sortProductDes = () => {
        setProductList(orderBy(productList, "price", "desc"));
    }
    
    return ( 
        <main className="main">
            <Helmet>
                <title>FAKESTORE | AllProducts</title>
            </Helmet>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb p-0 my-4">
                        <li class="breadcrumb-item">
                            <Link to="/" className="dark-link"> صفحه اصلی </Link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                             لیست تمامی محصولات 
                        </li>
                    </ol>
                </nav>
                <div className="text-right py-3">
                    <p className="mb-0">لیست تمامی محصولات ({products.length})</p>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div className="row">
                            <div className="col-lg-9">
                                <form className="position-relative">
                                    <input
                                        className="search-input"
                                        type="text"
                                        placeholder="دنبال چی میگردی؟"
                                        onChange={e => setSearch(e.target.value)}
                                    />
                                    <button className="search-btn" type="submit">
                                        <span className="fa fa-search"></span>
                                    </button>
                                 </form>
                            </div>
                            <div className="col-lg-3 mt-3 mt-lg-0">
                                <div class="dropdown">
                                    <button
                                        class="btn dropdown-toggle dropdown-btn"
                                        type="button" id="dropdownMenu2"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        مرتب سازی بر اساس
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <li>
                                            <button
                                                class="dropdown-item"
                                                type="button"
                                                onClick={sortProductDefault}> حالت پیش فرض 
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="dropdown-item"
                                                type="button"
                                                onClick={sortProductDes}> گران ترین محصولات 
                                            </button>
                                            </li>
                                        <li>
                                            <button
                                                class="dropdown-item"
                                                type="button"
                                                onClick={sortProductAsc}> ارزان ترین محصولات 
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Products products={allProducts} />
            <Pagination
                totalCourse={filteredProducts.length}
                currentPage={currentPage}
                perPage={perPage}
                onPageChange={handlePageChange}
            />
        </main>
    );
}
 
export default AllProducts;
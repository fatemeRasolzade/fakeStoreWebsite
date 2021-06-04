import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import Products from './Products';
import Pagination from '../common/Pagination';
import { paginate } from '../../Utils/paginate';

const AllProducts = () => {

    const [perPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);

    const products = useSelector(state => state.products);

    const handlePageChange = page => {
        setCurrentPage(page);
    }

    const allProducts = paginate(products, currentPage, perPage);
    
    return ( 
        <div>

            <Helmet>
                <title>FAKESTORE | AllProducts</title>
            </Helmet>
            <div className="container">
                <div className="text-right pt-5">
                    <p className="mb-0">لیست تمامی کالاها ({products.length})</p>
                </div>
            </div>
            <Products products={allProducts} />
            <Pagination
                totalCourse={products.length}
                currentPage={currentPage}
                perPage={perPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
 
export default AllProducts;
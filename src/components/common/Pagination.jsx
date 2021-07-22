import React from 'react';
import { range } from 'lodash';

const Pagination = ({totalCourse, currentPage, perPage, onPageChange}) => {

    const pageCount = Math.ceil(totalCourse / perPage);
    if(pageCount === 1) return null;

    const pages = range(1, pageCount+1);

    return ( 
        <nav aria-label="Page navigation example">
            <ul className="pagination d-flex justify-content-center pb-3 rounded-0">
                {pages.map(page => (
                    <li key={page} className="page-item  pointer">
                        <a  className={page === currentPage
                                        ? "page-link dark-link rounded-0 font-weight-bold"
                                        : "page-link dark-link rounded-0"
                                        }
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
     );
}
 
export default Pagination;
import React from 'react';

import './Pagination.css';

const Pagination = ({ imgPerPage, totalImgs, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalImgs / imgPerPage); i++) {
        pageNumbers.push(i)
    };

    return (
        <div className="rootClass">
            <nav>
                {pageNumbers.length > 1 && 
                    <ul className="pagination m-2">
                        {pageNumbers.map(number => (
                            <li className="page-item" key={number}>
                                <a href="!#" className="page-link" onClick={() => paginate(number)}>
                                    {number}
                                </a>
                            </li>
                        ))}
                    </ul>
                }
            </nav>
        </div>
    )
};

export default Pagination;

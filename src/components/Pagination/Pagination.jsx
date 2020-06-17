import React from 'react'

const Pagination = ({ imgPerPage, totalImgs, paginate }) => {
    console.log(imgPerPage);
    console.log(totalImgs);

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalImgs / imgPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li className="page-item" key={number}>
                        <a href="!#"
                            className="page-link"
                            onClick={() => paginate(number)}
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;

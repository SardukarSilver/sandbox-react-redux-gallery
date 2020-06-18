import React from 'react';

import './Search.css';

const search = ({ handleChange }) => {

    return (

    <div class="row">
        <div class="input-group col-md-4 m-2 searchInput">
            <input 
                class="form-control py-2 border-right-0 border" 
                type="search" 
                onChange={handleChange} 
                id="example-search-input" 
                placeholder="Search by Author..."     
            />
            <span class="input-group-append">
                <div class="input-group-text bg-transparent">
                    <i class="fa fa-search" />
                </div>
            </span>
        </div>
    </div>
    )
};

export default search;

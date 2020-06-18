import React from 'react';
import Pagination from "../Pagination/Pagination";

import './Gallery.css';

const Gallery = ({ photosList, imgPerPage, totalImgs, paginate }) => {

    return (
        <div className="row galleryWrapper">
            {photosList && photosList.map((img, i) =>
                <div className="col-md-4 col-12 col-image-small imageWrapper" key={img.id}>
                    <img
                        className="imageTile"
                        src={img.download_url}
                        alt={img.author}
                    />
                    <div className="authorName">{img.author}</div>
                </div>
            )}
            <Pagination
                imgPerPage={imgPerPage}
                totalImgs={totalImgs}
                paginate={paginate}
            />
        </div>
    )
};

export default Gallery;

import React from 'react';

import './Gallery.css';

const Gallery = ({photosList}) => {
    

    console.log(photosList);
    

    return (
        <div className="row">
            {photosList && photosList.map((img, i) =>
                <div className="col-md-4 col-12 col-image-small p-0 imageWrapper" key={img.id}>
                    <img
                        className="imageTile"
                        src={img.download_url}
                        alt={img.author}
                    />
                    <div className="authorName">{img.author}</div>
                </div>
            )}
        </div>
    )
};

export default Gallery;

import React from 'react';

import './GalleryComponent.css';

const GalleryComponent = props => {
    const { photosList } = props;

    return (
        <div className="row">
            {photosList && photosList.map((img, i) =>
                <div className="col-md-4 col-12 col-image-small p-0">
                    <img
                        className="imageTile"
                        src={img.download_url}
                        alt={img.author}
                        key={i}
                    />
                </div>
            )}
        </div>
    )
};

export default GalleryComponent;

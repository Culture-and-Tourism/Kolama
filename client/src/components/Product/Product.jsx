import React from 'react';

import './Product.css';

const Prodcut = (props) => {

    const { maskImage, maskName } = props.data;

    return (
        <div>
            <div className="product-card">
                <img
                    src={maskImage}
                    width={350}
                    height={350}
                    className="product-image"
                    alt='mask_images'
                />
                <center><h2 className="product-name">{maskName}</h2></center>
            </div>
        </div>
    );
};

export default Prodcut;
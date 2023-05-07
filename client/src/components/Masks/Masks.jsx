import React from 'react';

import './Masks.css';

const Masks = (props) => {

    const { kolamImage, kolamName } = props.data;

    return (
        <div>
            <div className="product-card">
                <img
                    src={kolamImage}
                    width={350}
                    height={350}
                    className="product-image"
                    alt='kolam_images'
                />
                <center><h2 className="product-name">{kolamName}</h2></center>
            </div>
        </div>
    );
};

export default Masks;
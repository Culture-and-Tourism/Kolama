import React from 'react';
import { Link } from 'react-router-dom';

import { urlFor } from '../../lib/client';

import './Product.css';

const Prodcut = ({ product: { image, name, slug } }) => {
    return (
        <div>
            <Link href={`/product/${slug.current}`}>
                <div className="product-card">
                    <img
                        src={urlFor(image && image[0])}
                        width={250}
                        height={250}
                        className="product-image"
                        alt='mask_images'
                    />
                    <p className="product-name">{name}</p>
                </div>
            </Link>
        </div>
    );
};

export default Prodcut;
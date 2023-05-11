import React, { useState } from 'react';
import HeroBanner from '../../../../components/HeroBanner/HeroBanner.jsx';
import { MASKS } from '../../../../mask';
import Product from '../../../../components/Product/Product.jsx';
import './Masks.css';
// import Product from '../../../../components/Product/Product.jsx';

const Masks = () => {

    const [query, setQuery] = useState("");

    return (
        <div className="app__header">

            <HeroBanner />

            <div className='main_title'>
                <h2 className="app__header-h1">Sri Lankan Kolam Masks ෴</h2>
                <p className="p__opensans" style={{ margin: '2rem 15rem' }}>Sri Lankan Kolam masks are a traditional form of mask-making that originated in the southern coastal regions of Sri Lanka. These masks are crafted from light-weight, eco-friendly materials such as balsa wood, and are used for a variety of purposes, including theatrical performances, rituals, and cultural festivals...</p>
            </div>

            <input type="text" placeholder='Search...' className='search' onChange={(e) => setQuery(e.target.value)} />

            <div className="product_container">
                {MASKS?.filter((product) => product.maskName.toLowerCase().includes(query)
                ).map((product) => <Product key={product.id} data={product} />)}
            </div>

        </div>
    );

}

export default Masks;
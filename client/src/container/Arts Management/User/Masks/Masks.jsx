import React from 'react';
import HeroBanner from '../../../../components/HeroBanner/HeroBanner.jsx';
import './Masks.css';
import Product from '../../../../components/Product/Product.jsx';
import { client } from '../../../../lib/client.js';

const Masks = ({ products }) => (

    <div className="app__header">

        <HeroBanner />

        <div className='main_title'>
            <h2 className="app__header-h1">Sri Lankan Kolam Masks</h2>
            <p className="p__opensans" style={{ margin: '2rem 15rem' }}>Sri Lankan Kolam masks are a traditional form of mask-making that originated in the southern coastal regions of Sri Lanka. These masks are crafted from light-weight, eco-friendly materials such as balsa wood, and are used for a variety of purposes, including theatrical performances, rituals, and cultural festivals...</p>
        </div>

        <div className="product_container">
            {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>

        FooterBanner

    </div>

);

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    return {
        props: { products }
    }
}

export default Masks;
import React from 'react';
import HeroBanner from '../../../../components/HeroBanner/HeroBanner.jsx';
import { PUPPET } from '../../../../puppet';
import PP from '../../../../components/PP/PP.jsx';
import './Puppets.css';
// import Product from '../../../../components/Product/Product.jsx';

const Puppets = () => (

    <div className="app__header">

        <HeroBanner />

        <div className='main_title'>
            <h2 className="app__header-h1">Sri Lankan Puppets ෴</h2>
            <p className="p__opensans" style={{ margin: '2rem 15rem' }}>Rukada is what puppet is called in Sri Lanka. It literally means figure or doll that is made of wood. It started with the south – eastern artists in the country, who made masks. When they started to make dolls for entertainments, they were soon joined by musicians and actors and began to perform at festivals and fairs...</p>
        </div>

        <div className="product_container">
            {PUPPET?.map((poppet) => <PP data={poppet} />)}
        </div>

    </div>

);

export default Puppets;
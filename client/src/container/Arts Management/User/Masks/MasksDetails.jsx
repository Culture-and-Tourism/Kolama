import React from 'react';
import images from '../../../../constants/images.js';

import { useParams } from 'react-router-dom';


import './MasksDetails.css';

const MasksDetails = (product) => {

    const { id } = useParams();

    return (
        <div>
            <div className="product-detail-container">
                <div>
                    <div className="image-container">
                        <img src={images.masks_banner} className="product-detail-image" alt='mask_logo'/>
                    </div>
                    <div className="small-images-container">
                        <img src={images.masks_banner} className="small-image" alt='mask_logo' />
                        <img src={images.masks_banner} className="small-image" alt='mask_logo' />
                        <img src={images.masks_banner} className="small-image" alt='mask_logo' />
                        <img src={images.masks_banner} className="small-image" alt='mask_logo' />
                    </div>
                </div>

                <div className="product-detail-desc">
                    <h1>Anabera Mask</h1><img src={images.mainmask} alt="mask_image" className="spoon__img" />
                    <p className="p__opensans" style={{ margin: '2rem 15rem 0rem 0rem' }}>The masked dance of Sri Lanka developed from shamanic healing and purification rituals, and  split along two lines.  The first, Yakun Natima, is the healing dance performed by a shaman.  Each demon (yakku) represents a specific disease or ailment, and to invoke the demon, the shaman wears a mask depicting the symptoms or symbols of the disease. When performing as a group, a character known as Kola Sanni Yakka, who is a kind of amalgamation of all diseases, presides over the demons. <br /> <br /> 

                    The second line, Kolam Natima is a storytelling dance drama involving 40 masked characters of very diverse types. The story originates in a myth of a pregnant Sinhalese queen who develops a craving to see masked dances. She begs her husband, the king, to arrange it, but he knows of no such dances. At his request, the god Sekkria, one of the four guardian gods, carves the masks and teaches the people how to perform the dance. They perform for the royal audience, and the baby is consequently born strong and healthy. The stories told with the masks are not a single cohesive narrative, but a series of stories that merge Sinhalese folk traditions with Buddhist Jataka stories, which tell of the former lives of the Buddha.</p>
                </div>
            </div>

            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                    <div className="maylike-products-container track">
                        <img src={images.mask1} alt='mask_logo' />
                        <img src={images.mask1} alt='mask_logo' />
                        <img src={images.mask1} alt='mask_logo' />
                        <img src={images.mask1} alt='mask_logo' />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MasksDetails;
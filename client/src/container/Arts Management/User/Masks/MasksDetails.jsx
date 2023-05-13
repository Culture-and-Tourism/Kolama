import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './MasksDetails.css';
import newRequest from '../../../../utils/newRequest.js';

const MasksDetails = () => {

    const { id } = useParams();
    const [kolam, setKolam] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await newRequest.get(`/addskolam/single/${id}`); // Assuming the API endpoint is '/api/items/:id'
                setKolam(response.data);
            } catch (error) {
                console.error(error);
                setKolam(null); // Handle error case when item is not found
            }
        };

        fetchItem();
    }, [id]);


    return (
        <div>
            {kolam ? (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <><img src={kolam.cover} alt='detail-image'/><><h2>{kolam.title}</h2><p className='p__opensans'>{kolam.desc}</p></></>
            ) : (
                <h2>Item not found</h2>
            )}
        </div>

    );
};

export default MasksDetails;

import './moreDetails.css'
import images from '../../../../constants/images.js';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import newRequest from '../../../../utils/newRequest';
import axios from "axios";



const AllDetails = () => {
    const { id } = useParams();
  const navigate = useNavigate();
  const [PMKolam, setPMKolam] = useState([]);
console.log("first",id)
useEffect(() => {
  function getPMKolam() {
    axios.get(`http://localhost:8800/api/Pkkolam/getSinglePMKolam/${id}`).then((res) => {
      setPMKolam(res.data);
      console.log(res)
    }).catch((err) => {
      alert(err);
    })
  }
  getPMKolam(id);
},    [])
  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
    <div className="card_list">
    <div class="row row-cols-1 row-cols-md-2 g-4">

      <div class="col">
                <div class="card border-warning bg-dark h-100 mb-4">
                    <div class="card-header2" style={{color:"white"}}>{PMKolam.name}</div>
                    <div class="card-body bg-dark">
                        <h5 class="card-title text-success"><i class="ri-phone-line"></i></h5>
                        <h5 class="card-title text-success ">  <i class="ri-mail-send-line"></i></h5>
                        <p class="card-text text-warning"><h3> </h3> </p>
                        <h6 class="card-title text-white">
                           </h6>
                    </div>
                </div>
            </div>
    
            <div class="col">
                <div class="card border-warning bg-dark h-100 mb-4">
                <div class="card-headertext1"></div>
                    <div class="card-body bg-dark">
                       
                        <div class="card-text2">The Ambalangoda Mask Museum, containing the museum’s main space, a workshop and a small library loaded with anthropological material on masked performances, has been a popular cultural stop in Sri Lanka since 1987. Officially named Ariyapala & Sons, it reflects the efforts of a family to preserve the traditions of masks and dancing over the course of five generations. The family has single-handedly undertaken the task of recreating a complete collection that mirrors the rich tradition of the coastal areas — a total of 120 masks that, due to the lack of space, can’t unfortunately all be displayed in the museum. It’s a free, magical ride to the Southern coast’s past, supplemented by the in-depth commentary of the English-speaking guides and enhanced by dioramas, giving a visual display of how they were used in performances.
</div>
                        <p class="card-text text-warning"><h3> </h3> </p>
                        <h6 class="card-title text-white">
                    </h6>
                    </div>
                </div>
            </div>
    
       
    </div>
</div>
  )
}

export default AllDetails
import React from 'react';
import Slider from 'react-slick';
import images from '../../../../constants/images';
import './sponsor_list.css'
import {Col} from 'reactstrap'


 const Testimonials = () => {
  const settings = {
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,

    responsive:[
      {
        breakpoint:992,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          infinite:true,
          dots:true,
        },
      },
      {
        breakpoint:576,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,

        },
      },
    ]


  }
  
    
  return (   <Col log='12'>
    
    <h1>Sponsors Of  The Traditional Sri Lankan Arts...</h1>
    <Slider {...settings}>
 
  <div className='testimonial py-4 px-3'>
      <p>
      The Ambalangoda Mask Museum, containing the museum’s main space, a workshop and a small library loaded with anthropological material on masked performances, has been a popular cultural stop in Sri Lanka since 1987. Officially named Ariyapala & Sons, it reflects the efforts of a family to preserve the traditions of masks and dancing over the course of five generations. The family has single-handedly undertaken the task of recreating a complete collection that mirrors the rich tradition of the coastal areas — a total of 120 masks that, due to the lack of space, can’t unfortunately all be displayed in the museum. It’s a free, magical ride to the Southern coast’s past, supplemented by the in-depth commentary of the English-speaking guides and enhanced by dioramas, giving a visual display of how they were used in performances.
    </p>
      <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={images.ava01}className='w-25 h-25 rounded-2 alt="'/>
        <div>
          <h5 className='mb-0 mt-3'>Ms.Taniya Amarasinghe</h5>
          <p>
           Sponsor
          </p>
        </div>
      </div>
    </div>
 
  
    <div className='testimonial py-4 px-3'>
      <p>
      The Katharagama Mask Museum, containing the museum’s main space, a workshop and a small library loaded with anthropological material on masked performances, has been a popular cultural stop in Sri Lanka since 1987. Officially named Ariyapala & Sons, it reflects the efforts of a family to preserve the traditions of masks and dancing over the course of five generations. The family has single-handedly undertaken the task of recreating a complete collection that mirrors the rich tradition of the coastal areas — a total of 120 masks that, due to the lack of space, can’t unfortunately all be displayed in the museum. It’s a free, magical ride to the Southern coast’s past, supplemented by the in-depth commentary of the English-speaking guides and enhanced by dioramas, giving a visual display of how they were used in performances.
  </p>
      <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={images.ava02}className='w-25 h-25 rounded-2 alt="'/>
        <div>
          <h5 className='mb-0 mt-3'>Pro. Mahinda Abesekara</h5>
          <p>
          Sponsor
          </p>
        </div>
      </div>
    </div>

    
    <div className='testimonial py-4 px-3'>
      <p>
      The Kandy Mask Museum, containing the museum’s main space, a workshop and a small library loaded with anthropological material on masked performances, has been a popular cultural stop in Sri Lanka since 1987. Officially named Ariyapala & Sons, it reflects the efforts of a family to preserve the traditions of masks and dancing over the course of five generations. The family has single-handedly undertaken the task of recreating a complete collection that mirrors the rich tradition of the coastal areas — a total of 120 masks that, due to the lack of space, can’t unfortunately all be displayed in the museum. It’s a free, magical ride to the Southern coast’s past, supplemented by the in-depth commentary of the English-speaking guides and enhanced by dioramas, giving a visual display of how they were used in performances.
    </p>
      <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={images.ava03}className='w-25 h-25 rounded-2 alt="'/>
        <div>
          <h5 className='mb-0 mt-3'>Sawithri Opanayake</h5>
          <p>
          Sponsor
          </p>
        </div>
      </div>
    </div>
    <div className='testimonial py-4 px-3'>
      <p>
      The Hambanthota Mask Museum, containing the museum’s main space, a workshop and a small library loaded with anthropological material on masked performances, has been a popular cultural stop in Sri Lanka since 1987. Officially named Ariyapala & Sons, it reflects the efforts of a family to preserve the traditions of masks and dancing over the course of five generations. The family has single-handedly undertaken the task of recreating a complete collection that mirrors the rich tradition of the coastal areas — a total of 120 masks that, due to the lack of space, can’t unfortunately all be displayed in the museum. It’s a free, magical ride to the Southern coast’s past, supplemented by the in-depth commentary of the English-speaking guides and enhanced by dioramas, giving a visual display of how they were used in performances.
   </p>
      <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={images.ava04}className='w-25 h-25 rounded-2 alt="'/>
        <div>
          <h5 className='mb-0 mt-3'>Mr Romesh Aroshana</h5>
          <p>
          Sponsor
          </p>
        </div>
      </div>
    </div>
    
</Slider>
    </Col>
 
  );
 };
   
export default Testimonials ;
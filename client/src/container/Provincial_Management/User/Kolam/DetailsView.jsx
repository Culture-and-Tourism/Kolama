
import './DetailsView.css';
import { Col, Container, Row, Form, FormGroup } from 'reactstrap';
import images from '../../../../constants/images';
import sponsorList from './sponsor_list';
import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

export default function DetailsView() {

    const [PMKolam, setPMKolam] = useState([]);
  // const kolam_list = () => {


  useEffect(() => {
    function getPMKolam() {
      axios.get("http://localhost:8800/api/Pkkolam/getAllPMKolam/").then((res) => {
        setPMKolam(res.data);
        console.log(res)
      }).catch((err) => {
        alert(err);
      })
    }
    getPMKolam();
  },


    [])
    return (<section>
        <Col lg='12'>
            <div className="search_bar">
                <Form className='d-flex align-items-center gap-4'>
                    <FormGroup className="d-flex gap-3 form_group form_group-fast">
                        <span>
                            <i class="ri-map-pin-line"></i>
                        </span>
                        <div>
                            <h6>Location</h6>
                            <input type="text" placeholder="Type Location">

                            </input>
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form_group form_group-fast">
                        <span>

                            <i class="ri-group-2-line"></i>
                        </span>
                        <div>
                            <h6>Dramatist</h6>
                            <input type="text" placeholder="Type of Dramatist?">

                            </input>
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form_group form_group-last">
                        <span>
                            <i class="ri-user-heart-line"></i>
                        </span>
                        <div>
                            <h6>Suppliers</h6>
                            <input type="text" placeholder="Type of Suppliers?">

                            </input>
                        </div>
                    </FormGroup>
                    <span clasName="search_icon" type="submit" >
                        <i class="ri-search-line"></i>                    </span>
                </Form>
            </div>

        </Col>
        <Row>
            <div className='zero_img-box'>
                <img src={images.PMK2} alt="" />
            </div>
        </Row>

        <Row>
        <div className="card_list">
                <div class="row row-cols-1 row-cols-md-4 g-4">

                    {PMKolam.map((val, key) => {

                        return<div class="col">
                            <div class="card border-warning bg-dark h-100 mb-4">
                                <div class="card-header"> <img src={val.cover} alt=""   /></div>
                                <div class="card-body bg-dark">
                                    <h5 class="card-title text-white">  <i class="ri-map-pin-line text-danger"></i>{val.location}</h5>
                                    <p class="card-text text-warning"><h3> {val.name}</h3> </p>
                                    <h6 class="card-title text-white">{val.title}
                                     <Link to={`/more/${val._id}`}>
                                        <button type="button" class="btn btn-success align-right">more</button></Link></h6>
                                </div>
                            </div>
                        </div>
                    })}
                   
                </div>
            </div>
        </Row>
        <Row>
           
            
            <sponsorList></sponsorList>
        </Row>
      

        <Row>
       
        <div className="app__newsletter-input flex__center">
            <input type="email" placeholder="Give us your valuable details about Traditional arts....." disabled/>
            <Link to ="/PM_Kolam_input">
            <button type="button" className="custom__button">Open</button>
            </Link>
        </div>
        </Row>

    </section>


    )
}

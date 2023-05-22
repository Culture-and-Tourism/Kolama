import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import './list.css';
import {Link} from 'react-router-dom';
import images from '../../../constants/images.js';

export default function Kolam_list() {

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

  // console.log("val_id", val._id)
  // console.log("normal del id",id)

  function DeletePMKolam(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover these details!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(() => {
      axios.delete(`http://localhost:8800/api/Pkkolam/deletePMKolam/${id}`)
      swal({
        title: "Success!",
        text: "Deleted record Successfully",
        icon: "success",
        timer: 2000,
        button: false,
      });
    }).catch((err) => {
      swal({
        title: "Error!",
        text: "Coulden't Delete your Product",
        type: "error",
      });
    });
  };
  return (


    <center>
      <img class="img" src={images.mainmask} alt="" />
      <div className="title">Kolam Details List</div>

      <div className="add">
        <Link to ="/PM_Kolam_input">
        <button type="button" class="btn btn-success">+  Add New Kolam Provincial Details</button>
     </Link>
     </div>
      <table class="table table-dark table-fixed table-striped" >
        <thead>
          <tr>


            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">ArtCategory</th>
            <th scope="col">Title</th>
            <th scope="col">Phone No</th>
            <th scope="col">Email</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {PMKolam.map((val, key) => {

            return <tr className="tr">

              <td>{val.name}</td>
              <td>{val.location}</td>
              <td>{val.artCategory}</td>
              <td>{val.title}</td>
              <td>{val.phoneNo}</td>
              <td>{val.email}</td>
              <td className="dis">{val.description}</td>
              <td><img src={val.cover} alt="" /></td>
              <td><button type="button"
                class="btn btn-outline-danger"
                href="#" onClick={() => DeletePMKolam(val._id)}>Delete</button>
              </td>

            </tr>


          })}



        </tbody>
        {/* <button type="button" class="btn btn-danger">Danger</button>
              <button type="button" class="btn btn-warning">Warning</button> */}
      </table>

    </center>
  )
}


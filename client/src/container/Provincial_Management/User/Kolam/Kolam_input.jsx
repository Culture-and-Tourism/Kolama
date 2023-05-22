
import './form.css'
import images from '../../../../constants/images';
import React, { useReducer, useState } from 'react';
import axios from "axios";
import { pmReducer, INITIAL_STATE } from '../../../../reducers/pmReducer';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import upload from '../../../../utils/upload';

import { useNavigate } from 'react-router-dom';


const Kolam_input = () => {

  //   const[name,setName]=useState("");
  //   const[location,setlocation]=useState("");
  //   const[artCategory,setartCategory]=useState("");
  //   const[title,settitle]=useState("");
  //   const[phoneNo,setphoneNo]=useState("");
  //   const[email,setemail]=useState("");
  //   const[description,setdescription]=useState("");
  //   const[image,setimage]=useState("");

  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(pmReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: 'CHANGE_INPUT',
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: 'ADD_IMAGES', payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (pm) => {

      return axios.post("http://localhost:8800/api/Pkkolam/addPMKolam/", pm).then(()=>{
        alert("New Record  Added  Successfully")
 }).catch((err)=>{
     alert(err)
 })
    





    },
    onSuccess: () => {
      queryClient.invalidateQueries(['myProducts']);
    },
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    navigate('/PM_KolamList');
  };


  //   function sendData(e){
  //       e.preventDefault();
  //        const newPMKolam ={
  //            name,
  //            location,
  //            artCategory,
  //            title,
  //            phoneNo,
  //            email,
  //            description,
  //            image,

  //        }
  //        axios.post("http://localhost:8800/api/Pkkolam/addPMKolam/",newPMKolam).then(()=>{
  //            alert("Successfuly Added ")
  //     }).catch((err)=>{
  //         alert(err)
  //     })

  //   }







  return (
    <table>
      <tr>
        <td> <div className="img_form">
          <img src={images.welcomeArts} className='form_img alt="' />
        </div></td>
        <td> <div className='formbox'>

          <form class="row g-3" form onSubmit={handleSubmit}>
            <div class="row-md-2">
              <label for="validationDefault01" class="form-label">Name</label>
              <input type="text" className="form-control" id="name" name='name' placeholder="Type your Name"
                onChange={handleChange}
                required />
            </div>

            <div class="row-md-2">
              <label for="validationDefault02" class="form-label">Location-Province</label>
              <input type="text" className="form-control" name='location' id="location" placeholder="Type your Name"
                onChange={handleChange}
                required />
            </div>
            <div class="row-md-2">
              <label for="validationDefault01" class="form-label">Art Category</label>
              <input type="text" className="form-control" id="artCategory" name='artCategory' placeholder="Type your Name"
                onChange={handleChange}
                required />
            </div>

            <div class="row-md-2">
              <label for="validationDefault02" class="form-label">Title</label>
              <input type="text" className="form-control" id="title" name='title' placeholder="Type your Name"
                onChange={handleChange}
                required />
            </div>

            <div class="row-md-2">
              <label for="validationDefault02" class="form-label">Phone No</label>
              <input type="text" className="form-control" id="phoneNo" name='phoneNo' placeholder="Type your Name"
                onChange={handleChange}
                required />
            </div>

            <div class="row-md-2">
              <label for="validationDefaultUsername" class="form-label">Email</label>
              <div class="input-group">
                <span class="input-group-text" id="inputGroupPrepend2">@</span>
                <input type="text" className="form-control" id="email" name='email' placeholder="Type your Name"
                  onChange={handleChange}
                  required />
              </div>
            </div>

            <div class="row-md-2">
              <label for="validationDefault02" class="form-label">  Description</label>
              <input type="text" className="form-control" id="description" name='description' placeholder="Type your Name"
                onChange={handleChange}
                required />
            </div>
            <div class="row-md-4">
              <div className='images'>
                <div className='imagesInputs'>
                  <label htmlFor='file' className='custom-file-upload'>
                    Choose Cover Image
                  </label>
                  <input
                    id='file'
                    type='file'
                    onChange={(e) => setSingleFile(e.target.files[0])}
                  />

                  <label htmlFor='file-upload' className='custom-file-upload'>
                    Upload Images
                  </label>
                  <input
                    id='file-upload'
                    type='file'
                    multiple
                    onChange={(e) => setFiles(e.target.files)}
                  />
                </div>
                <button className='create' onClick={handleUpload}>
                  {uploading ? 'uploading' : 'Upload'}
                </button>
              </div>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                <label class="form-check-label" for="invalidCheck2">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-warning" type="submit">Submit form</button>
            </div>
          </form>

        </div>
        </td>
      </tr>
    </table>

  )
}

export default Kolam_input
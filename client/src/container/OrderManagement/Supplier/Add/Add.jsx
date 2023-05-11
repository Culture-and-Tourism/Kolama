import React, { useReducer, useState } from 'react';
import './Add.css';
import { addReducer, INITIAL_STATE } from '../../../../reducers/addReducer.js';
import upload from '../../../../utils/upload';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../../../utils/newRequest';
import {  toast } from 'react-toastify';


const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(addReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: 'CHANGE_INPUT',
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_FEATURE',
      payload: e.target[0].value,
    });
    e.target[0].value = '';
  };

  const handleUpload = async () => {
    setUploading(true);
    toast.success(" Uploaded Successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
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

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (add) => {
      return newRequest.post('/adds', add);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['myProducts']);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    navigate('/myproduct');
  };
  console.log(state);
  return (
    <div className='add'>
      <div className='container'>
        <div className='titlep'></div>
        <h1>Add New Product</h1>

        <div className='sections'>
          <div className='info'>
            <label htmlFor=''>Title Of The Product</label>
            <input
              type='text'
              name='title'
              placeholder='e.g.Puppets and masks of Ambalangoda'
              onChange={handleChange}
            />
            <label htmlFor=''>Category</label>
            <select name='cat' id='cat' onChange={handleChange}>
              <option value='Masks '>Masks </option>
              <option value='Puppets '>Puppets </option>
              <option value='KolamItems'>Kolam Items</option>
              <option value='Handicraft '>Handicraft</option>
              <option value='Arts&Crafts'>Arts & Crafts</option>
            </select>

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
            <label htmlFor=''>Description</label>
            <textarea
              name='desc'
              id=''
              placeholder='Brief descriptions to introduce your Sell Items to customers'
              cols='0'
              rows='16'
              onChange={handleChange}
            ></textarea>
            <button className='create' onClick={handleSubmit}>
              Create
            </button>
          </div>
          <div className='details'>
            <label htmlFor=''>Service Locations</label>
            <input
              type='text'
              name='shortTitle'
              placeholder='e.g. Ambalangoda'
              onChange={handleChange}
            />
            <label htmlFor=''>Short Description</label>
            <textarea
              name='shortDesc'
              onChange={handleChange}
              id=''
              placeholder='Short description of your Online service'
              cols='30'
              rows='10'
            ></textarea>
            <label htmlFor=''>Delivery Time (e.g. 3 days)</label>
            <input type='number' name='deliveryTime' onChange={handleChange} />
            <label htmlFor=''>Available Quntity </label>
            <input
              type='number'
              name='availableQuntity'
              onChange={handleChange}
            />
            <label htmlFor=''>Add Specific Features </label>
            <form action='' className='add' onSubmit={handleFeature}>
              <input type='text' placeholder='e.g. Color: Red, Blue' />
              <button type='submit'>Add </button>
            </form>
            <div className='addedFeatures'>
              {state?.features?.map((f) => (
                <div className='item' key={f}>
                  <button
                    onClick={() =>
                      dispatch({ type: 'REMOVE_FEATURE', payload: f })
                    }
                  >
                    {f}
                    <span>X</span>
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor=''>Price (USD)</label>
            <input
              type='number'
              placeholder='e.g. $ 40.00'
              onChange={handleChange}
              name='price'
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;

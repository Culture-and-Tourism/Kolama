import React, { useReducer, useState } from 'react';
import './AddMask.css';
import { addReducer, INITIAL_STATE } from '../../../../reducers/addReducer.js';
import upload from '../../../../utils/upload';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../../../utils/newRequest';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddMask = () => {
    const [singleFile, setSingleFile] = useState(undefined);
    const [uploading, setUploading] = useState(false);

    const [state, dispatch] = useReducer(addReducer, INITIAL_STATE);

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

            setUploading(false);
            dispatch({ type: 'ADD_IMAGES', payload: { cover } });
        } catch (err) {
            console.log(err);
        }
    };

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (addmask) => {
            return newRequest.post('/addsmask', addmask);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['myProducts']);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate(state);
        toast('Details inserted successfully');
        navigate('/viewmask');
    };
    console.log(state);
    return (
        <><div className='add'>
            <div className='container'>
                <div className='titlep'>
                    <h1 style={{ color: '#DCCA87' }}>Add New Sanni Masks</h1>
                </div>

                <div className='sections'>
                    <div className='info'>
                        <label htmlFor=''>Name of the Sanni Mask</label>
                        <input
                            type='text'
                            name='title'
                            placeholder='e.g.Butha Sanniya'
                            onChange={handleChange} />

                        <label htmlFor=''>Description</label>
                        <textarea
                            name='desc'
                            id=''
                            placeholder='Brief description of the new sanni mask being added'
                            cols='0'
                            rows='16'
                            onChange={handleChange}
                        ></textarea>

                        <div className='images'>
                            <div className='imagesInputs'>
                                <label>Browse Image</label>
                                <label htmlFor='file' className='custom-file-upload'>
                                    Choose Cover Image
                                </label>
                                <input
                                    id='file'
                                    type='file'
                                    onChange={(e) => setSingleFile(e.target.files[0])} />
                            </div>
                            <button className='create' onClick={handleUpload}>
                                {uploading ? 'uploading' : 'Upload'}
                            </button>
                        </div>

                        <button className='create' onClick={handleSubmit}>
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div><ToastContainer /></>
    );
};

export default AddMask;

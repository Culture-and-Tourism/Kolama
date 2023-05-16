import React from 'react';
import { Link } from 'react-router-dom';
import './ViewMask.css';
import { useNavigate } from 'react-router-dom';
import getCurrentUser from '../../../../utils/getCurrentUser';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import newRequest from '../../../../utils/newRequest';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

function ViewMask() {
    const currentUser = getCurrentUser();

    const { isLoading, error, data } = useQuery({
        queryKey: ['myProducts'],
        queryFn: () =>
            newRequest.get(`/addsmask?userId=${currentUser._id}`).then((res) => {
                return res.data;
            }),
    });

    const mutation = useMutation({
        mutationFn: (id) => {
            return newRequest.delete(`/addsmask/${id}`);
        },
        onSuccess: () => {
            toast.success('Item deleted successfully!');
        },
    });

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            mutation.mutate(id);
        }
    };

    const navigate = useNavigate();

    const handlUpdate = (id) => {
        navigate("/")
    }
    return (

        <><div className='myProducts'>

            {isLoading ? (
                'loading'
            ) : error ? (
                'error'
            ) : (

                <div className='container_table'>
                    <div className='table'>
                        <div className='table_header'>
                            <h1>Sri Lankan Sanni Masks</h1>
                            <Link to="/addmask">
                                <button className="button">Add New Sanni Masks</button>
                            </Link>
                        </div>
                        <div className='table_body'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {data.map((mask) => (
                                        <tr key={mask._id}>
                                            <td>
                                                <img className='img' src={mask.cover} alt='item img' />
                                            </td>
                                            <td><strong>{mask.title}</strong></td>
                                            <td>{mask.desc}</td>
                                            <td>
                                                <div className="actionBtn">
                                                    <IconButton onClick={() => handleDelete(mask._id)}> <DeleteForeverIcon style={{ color: 'red' }} /></IconButton>

                                                    <IconButton onClick={() => handlUpdate(mask._id)}> <EditIcon style={{ color: 'yellow' }} /></IconButton>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

        </div><ToastContainer /></>
    );
}

export default ViewMask;
import React from 'react';
import { Link } from 'react-router-dom';
import './ViewKolam.css';
import { useNavigate } from 'react-router-dom';
import getCurrentUser from '../../../../utils/getCurrentUser';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import newRequest from '../../../../utils/newRequest';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton'; 

function ViewKolam() {
    const currentUser = getCurrentUser();

    const { isLoading, error, data } = useQuery({
        queryKey: ['myProducts'],
        queryFn: () =>
            newRequest.get(`/addskolam?userId=${currentUser._id}`).then((res) => {
                return res.data;
            }),
    });

    const mutation = useMutation({
        mutationFn: (id) => {
            return newRequest.delete(`/addskolam/${id}`);
        },
        onSuccess: () => { 
            toast.success('Item deleted successfully!');
        },
    });

    const handleDelete = (id) => {
        if(window.confirm('Are you sure you want to delete this item?')) {
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
                            <h1>Sri Lankan Kolam Masks</h1>
                            <Link to="/addkolam">
                                <button className="button">Add New Kolam Masks</button>
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

                                    {data.map((kolam) => (
                                        <tr key={kolam._id}>
                                            <td>
                                                <img className='img' src={kolam.cover} alt='item img' />
                                            </td>
                                            <td><strong>{kolam.title}</strong></td>
                                            <td>{kolam.desc}</td>
                                            <td>
                                                <div className="actionBtn">
                                                    <IconButton onClick={() => handleDelete(kolam._id)}> <DeleteForeverIcon style={{ color: 'red' }} /></IconButton>

                                                    <IconButton onClick={() => handlUpdate(kolam._id)}> <EditIcon style={{ color: 'yellow' }} /></IconButton>
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

export default ViewKolam;
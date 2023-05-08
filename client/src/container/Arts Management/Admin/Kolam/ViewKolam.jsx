import React from 'react';
import { Link } from 'react-router-dom';
import './ViewKolam.css';
import { useNavigate } from 'react-router-dom';
import getCurrentUser from '../../../../utils/getCurrentUser';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../../../utils/newRequest';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

function ViewKolam() {
    const currentUser = getCurrentUser();

    const queryClient = useQueryClient();

    const { isLoading, error, data } = useQuery({
        queryKey: ['myProducts'],
        queryFn: () =>
            newRequest.get(`/kolams?userId=${currentUser._id}`).then((res) => {
                return res.data;
            }),
    });

    const mutation = useMutation({
        mutationFn: (id) => {
            return newRequest.delete(`/kolams/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['myProducts']);
        },
    });

    const handleDelete = (id) => {
        mutation.mutate(id);

    };

    const navigate = useNavigate();

    const handlUpdate = (id) => {
        navigate("/")
    }
    return (

        <div className='myProducts'>
            {isLoading ? (
                'loading'
            ) : error ? (
                'error'
            ) : (
                <div className='container'>
                    <div className='title'>
                        <h1>My Products</h1>
                        <Link to="/supplier/add">
                            <button>Add New Product</button>
                        </Link>
                    </div>
                    <table>
                        <tr>
                            <th>Image  Of  Product</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>

                        {data.map((add) => (
                            <tr key={add._id}>
                                <td>
                                    <img className='img' src={add.cover} alt='item img' />
                                </td>
                                <td>{add.title}</td>
                                <td>{add.desc}</td>
                                <td>
                                    <div className="actionBtn">
                                        <IconButton onClick={() => handleDelete(add._id)}> <DeleteForeverIcon style={{ color: 'red' }} /></IconButton>
                                        <IconButton onClick={() => handlUpdate(add._id)}> <EditIcon style={{ color: 'yellow' }} /></IconButton>

                                    </div>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            )}
        </div>
    );
}

export default ViewKolam;
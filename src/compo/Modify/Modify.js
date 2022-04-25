import React from 'react';
import { useNavigate } from 'react-router-dom';

const Modify = ({ id }) => {
    const navigate = useNavigate();
    const deleteClick = id => {
        if (window.confirm('Are you sure?')) {
            fetch(`http://localhost:5000/api/user/${id}`, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(result => {
                    if (window.location.pathname === '/') {
                        window.location.reload()
                    }
                    else {
                        navigate('/');
                    }
                })

        }
    }

    return (
        <>
            <button onClick={() => navigate(`/update/${id}`)}>Update</button>
            <button onClick={() => deleteClick(id)}>Delete</button>
        </>
    );
};

export default Modify;
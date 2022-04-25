import React from 'react';
import { useNavigate } from 'react-router-dom';

const Modify = ({ id }) => {
    const navigate = useNavigate();
    const deleteClick = id => {
        console.log('delete', id);
    }

    return (
        <>
            <button onClick={() => navigate(`/update/${id}`)}>Update</button>
            <button onClick={() => deleteClick(id)}>Delete</button>
        </>
    );
};

export default Modify;
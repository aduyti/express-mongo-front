import React from 'react';
import { useNavigate } from 'react-router-dom';
import Modify from '../Modify/Modify';

const Card = ({ person }) => {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate(`/person/${person._id}`)} >{person.name}</button>
            <Modify id={person._id} />
        </div>
    );
};

export default Card;
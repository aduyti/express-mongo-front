import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ person }) => {
    const navigate = useNavigate()
    return (
        <div>

            <button onClick={() => navigate(`/person/${person.id}`)} >{person.name}</button>

        </div>
    );
};

export default Card;
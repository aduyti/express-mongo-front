import React from 'react';
import { useParams } from 'react-router-dom';

const NewPerson = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>New Person</h1>
            {id}

        </div>
    );
};

export default NewPerson;
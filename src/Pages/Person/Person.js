import React from 'react';
import { useParams } from 'react-router-dom';

const Person = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Person</h1>\
            {id}

        </div>
    );
};

export default Person;
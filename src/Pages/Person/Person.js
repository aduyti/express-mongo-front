import React from 'react';
import { useParams } from 'react-router-dom';
import Modify from '../../compo/Modify/Modify';
import usePerson from '../../Hooks/usePerson';

const Person = () => {
    const { id } = useParams();
    const person = usePerson(id);
    return (
        <div>
            <h1>{person?.name}</h1>
            <p>{person.age}y, {person.gender}, ${person.money}</p>
            <Modify id={person._id} />

        </div>
    );
};

export default Person;
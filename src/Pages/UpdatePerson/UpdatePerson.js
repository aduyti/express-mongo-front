import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import usePerson from '../../Hooks/usePerson';


const UpdatePerson = () => {
    const { id } = useParams();
    const person = usePerson(id);
    const navigate = useNavigate();


    const nameRef = useRef('');
    const ageRef = useRef('');
    const genderRef = useRef('');
    const moneyRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();

        const newUser = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            gender: genderRef.current.value,
            money: moneyRef.current.value
        }

        fetch(`http://localhost:5000/api/user/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(response => response.json())
            .then(result => {
                navigate(`/person/${id}`);
            })
    }

    return (
        <div>
            <h1>Update {person.name}</h1>
            <form onSubmit={handleSubmit}>
                <br /><input type="text" ref={nameRef} placeholder="Name" defaultValue={person?.name || ''} />
                <br /><input type="text" ref={ageRef} placeholder="Age" defaultValue={person?.age || ''} />
                <br /><input type="text" ref={genderRef} placeholder="Gender" defaultValue={person?.gender || ''} />
                <br /><input type="text" ref={moneyRef} placeholder="Money" defaultValue={person?.money || ''} />
                <br /><button type="submit">Update</button>
            </form>

        </div>
    );
};

export default UpdatePerson;
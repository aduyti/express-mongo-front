import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPerson = () => {
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

        fetch('http://localhost:5000/api/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(response => response.json())
            .then(result => {
                navigate('/');
            })
    }

    return (
        <div>
            <h1>New Person</h1>
            <form onSubmit={handleSubmit}>
                <br /><input type="text" ref={nameRef} placeholder="Name" />
                <br /><input type="text" ref={ageRef} placeholder="Age" />
                <br /><input type="text" ref={genderRef} placeholder="Gender" />
                <br /><input type="text" ref={moneyRef} placeholder="Money" />
                <br /><button type="submit">Submit</button>
            </form>

        </div>
    );
};

export default NewPerson;
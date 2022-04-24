import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';

const NewPerson = () => {
    const { id } = useParams();
    const nameRef = useRef('');
    const ageRef = useRef('');
    const genderRef = useRef('');
    const moneyRef = useRef('');
    const handleSubmit = event => {
        event.preventDefault();
        if (id) {
            console.log('update');
        }
        else {
            console.log('create');
            nameRef.current.value();
            ageRef.current.value();
            genderRef.current.value();
            moneyRef.current.value();
        }
        event.target.reset();
    }

    return (
        <div>
            <h1>New Person</h1>
            {id}
            <form onSubmit={handleSubmit}>
                <br />{id}<input type="text" ref={nameRef} placeholder="Name" />
                <br />{id}<input type="text" ref={ageRef} placeholder="Age" />
                <br />{id}<input type="text" ref={genderRef} placeholder="Gender" />
                <br />{id}<input type="text" ref={moneyRef} placeholder="Money" />
                <br /><button type="submit">Submit</button>
            </form>

        </div>
    );
};

export default NewPerson;
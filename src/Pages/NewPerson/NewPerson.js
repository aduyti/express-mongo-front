import React, { useRef } from 'react';

const NewPerson = () => {

    const nameRef = useRef('');
    const ageRef = useRef('');
    const genderRef = useRef('');
    const moneyRef = useRef('');
    const handleSubmit = event => {
        event.preventDefault();

        console.log('create');
        nameRef.current.value();
        ageRef.current.value();
        genderRef.current.value();
        moneyRef.current.value();
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
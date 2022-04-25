import React from 'react';
import Card from '../../compo/Card/Card';
import usePeople from '../../Hooks/usePeople';

const Home = () => {
    const people = usePeople();
    return (
        <div>
            <h1>Home</h1>
            {
                people.map(person => <Card key={person._id} person={person} />)
            }
        </div>
    );
};

export default Home;
import { useEffect, useState } from "react"

const usePerson = (id) => {
    const [person, setPerson] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/api/user/${id}`)
            .then(response => response.json())
            .then(data => setPerson(data))
    }, [id])

    return person;
}

export default usePerson;
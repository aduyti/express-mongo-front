import { useEffect, useState } from "react"

const usePeople = () => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/users')
            .then(response => response.json())
            .then(data => setPeople(data))
    }, [])

    return [people, setPeople];
}

export default usePeople;
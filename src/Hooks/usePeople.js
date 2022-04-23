import { useState } from "react"

const usePeople = () => {
    const [people, setPeople] = useState([]);

    return people;
}

export default usePeople;
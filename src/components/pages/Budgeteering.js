import React, { useState, useContext } from 'react'
import Budget from './Budget'

export default function Budgeteering() {

    const user = useContext(UserContext);
    const [card, setCard] = useState([]);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {

        fetch('http://localhost:65424/api/Budget/GetBudgetList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(data => data.json())
            .then(data => { setCard(data) })
            .catch((err) => {
                console.error(err);
            })

    }, [])


    return (
        <div className="mainPage">


        </div>
    )
}

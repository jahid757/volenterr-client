import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

const Home = () => {
    const [events,setEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/events')
        .then(response => response.json())
        .then(data => setEvents(data))
    },[])
    return (
        <div className="container">
            <div className="row">
            {
                events.map(event => <Event key={event._id} event={event}></Event>)
            }
            </div>
        </div>
    );
};

export default Home;
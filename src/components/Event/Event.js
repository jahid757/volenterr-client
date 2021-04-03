import React from 'react';

const Event = ({event}) => {
    const deleteItem = (id) => {
        fetch('http://localhost:5000/deleteEvent/'+id, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
    return (
        <div className="col-md-3">
            {/* <img height="250px" src={`../../images/${event.pic}`} alt=""/> */}

            <img width="250px" height="250px" src={event.imgUrl} alt="Img Not Found"/>
            <h3>{event.name} <button onClick={() => deleteItem(event._id)}>Delete</button></h3>
        </div>
    );
};

export default Event;
import React from "react";
import { v1 as uuid } from "uuid";
import '../App.css';

const WebcamRoom = (props) => {
    function create() {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }

    return (
        <button onClick={create}>Create Room</button>
    );
}

export default WebcamRoom;

import React from "react";
import { v1 as uuid } from "uuid";
import '../App.css';

// This allows the user to click the create room button and then brings 
// them into a chat room and was meant to allow another user to join by url.
const WebcamRoom = (props) => {
    function create() {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }

    return (
        <main>
        <h1 class="centerText" >Welcome to the Video Chat page. </h1>
        <h2 class="centerText" >Click "Create Room" to create new chat room </h2>
        <div class="centerText">
        <button  onClick={create}>Create Room</button>
        </div>
        </main>
    );
}

export default WebcamRoom;

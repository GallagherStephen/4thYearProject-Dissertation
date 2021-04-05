import React from 'react';
import { ChatEngine } from 'react-chat-engine';

function chat() {
	return (
		<ChatEngine
			projectID='5fb755cb-318f-4a29-a038-ab46c69af8ea'
			userName='admin'
			userSecret='admin'
		/>
	);
}

export default chat;
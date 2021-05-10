import React from 'react';
import { ChatEngine } from 'react-chat-engine';

function chat() {
	return (


		<body>
			<main>
			<section class="presentation">
               
		   {/*  This allows the chat engine to be added to this page to be used for the user on site*/}
		<ChatEngine
			projectID='5fb755cb-318f-4a29-a038-ab46c69af8ea'
			userName='admin'
			userSecret='admin'
		/>

		  
   			</section>
			
			</main>
		
		</body>
		
	);
}

export default chat;
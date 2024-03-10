import React, { useEffect, useState } from 'react'
import { firebaseInit } from '../../utils/firebaseInit';
import { getAuth } from 'firebase/auth';

import { Box, Container, Paper } from '@mui/material'
import { useTheme } from "@mui/material/styles";
import Header from './Header';
import Footer from './Footer';
import Message from './Message';

const Conversation = () => {

	const theme = useTheme();
	const [user, setUser] = useState([]);
	const [messageInput, setMessageInput] = useState('');
	const [messages, setMessages] = useState([]);

	const initApp =  () => {
		try {

			console.log('firebaseInit: ',firebaseInit)
	
			const auth = getAuth(firebaseInit)
			auth.onAuthStateChanged(function (user) {
			
					console.log('user:  ',user)
			}, function (error) {

				console.log('error:  ',error)
			});
		} catch (error) {
			console.error('Error initializing Firebase:', error.message);
		}
	};
	

	useEffect(() => {
		initApp();
	}, []);


	const handleNewMessage = async (messageInput) => {

		try {

			//console.log("index.js", messageInput)
			if (messageInput.trim() === '') {
				return;
			}

			const newMessage = {
				message: messageInput,
				sender: 'user',
				type: 'text',
				incoming: true
			};

			setMessages((prevMessages) => [...prevMessages, newMessage]);

			const response = await fetch('http://localhost:5000/detectIntent', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					texto: messageInput,
				})
			});

			if (!response.ok) {
				throw new Error(`Request failed with status ${response.status}`);
			}

			const msg = await response.json();

			//console.log('msg:   ', msg);

			const texto = msg[0].queryResult.fulfillmentText;

			if (texto.trim() !== '') {
				const newReply = {
					type: 'text',
					message: texto,
					incoming: false,
					sender: 'bot',
				};

				// Update the state with the new reply
				setMessages((prevMessages) => [...prevMessages, newReply]);
			} else {
				const resp = msg[0].queryResult.fulfillmentMessages;

				for (let i = 0; i < resp.length; i++) {
					const messageType = resp[i].message;
					//console.log('messageType:   ', messageType)
					if (messageType === 'card') {
						const newCard = {
							type: 'card',
							imageUri: resp[i].card.imageUri,
							title: resp[i].card.title,
							message: resp[i].card.subtitle,
							incoming: false,
							sender: 'bot',
						};

						// Update the state with the new card
						setMessages((prevMessages) => [...prevMessages, newCard]);
					} else if (messageType === 'quickReplies') {
						const replies = resp[i].quickReplies.quickReplies;

						const newQuickReplies = {
							type: 'replies',
							quickReplies: replies,
							incoming: false,
							sender: 'bot',
						};

						// Update the state with the new quick replies
						setMessages((prevMessages) => [...prevMessages, newQuickReplies]);
					} else if (messageType === 'image') {
						const newImage = {
							type: 'img',
							img: resp[i].image.imageUri,
							incoming: false,
							sender: 'bot'
						};

						// Update the state with the new image
						setMessages((prevMessages) => [...prevMessages, newImage]);
					} else if (messageType === 'text') {

						//console.log("resp[i].text", resp[i].text.text[0])
						const newBotText = {
							type: 'text',
							message: texto,
							incoming: false,
							sender: 'bot',
							message: resp[i].text.text[0]
						};

						setMessages((prevMessages) => [...prevMessages, newBotText]);
					}
				}
			}

			setMessageInput('');
			//	console.log('messages:  ', messages)
		} catch (error) {
			console.error('Error processing message:', error.message);
		}


	};

	const logoutGoogle = (logout) => {

		if (logout) {
			window.location.replace("/login")
		 const auth = getAuth(firebaseInit)
			auth.signOut().then(() => {
			
				console.log('Usuário deslogado com sucesso.');
			}).catch((error) => {
				console.error('Erro ao tentar deslogar:', error.message);
			}); 
		}

	}

	return (
		<Container>
			<Paper elevation={3} style={{ padding: '20px' }}>
				<Header logoutGoogle={logoutGoogle} userInfo={user} />
				<Box sx={{ height: "50vh", overflowY: "scroll", position: "relative", backgroundColor: "#efefef" }}>
					<Message messages={messages} />
				</Box>
				<Footer handleNewMessage={handleNewMessage} />
			</Paper>
		</Container>
	);
}

export default Conversation
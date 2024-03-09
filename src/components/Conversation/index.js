import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useTheme } from "@mui/material/styles";
import Header from './Header';
import Footer from './Footer';
import Message from './Message';

const Conversation = () => {
	const theme = useTheme();
	const backgroundImageStyle = {
		backgroundImage: `url('./pablo-merchan-montes-GFW3dJRiMsQ-unsplash.jpg')`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '95vh'
	};

	const [user, setUser] = useState(null);
	const [messageInput, setMessageInput] = useState('');
	const [messages, setMessages] = useState([]);

	const handleNewMessage = async (messageInput) => {

		try {

			console.log("index.js", messageInput)
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

			console.log('msg:   ', msg);

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
							type: 'image',
							img: resp[i].image.imageUri,
							incoming: false,
							sender: 'bot',
							message: ''
						};

						// Update the state with the new image
						setMessages((prevMessages) => [...prevMessages, newImage]);
					}
				}
			}

			setMessageInput('');
			console.log('messages:  ', messages)
		} catch (error) {
			console.error('Error processing message:', error.message);
		}


	};

	return (
		<Container
			style={backgroundImageStyle}
		>

			<Paper
				elevation={3}
				style={{
					padding: '20px',
					width: '800px', 
				}}
			>
				<Header />
				<Box sx={{ height: "50vh", overflowY: "scroll", position: "relative" }}>
					<Message messages={messages} />
				</Box>
				<Footer
					handleNewMessage={handleNewMessage} />
			</Paper>
		</Container>
	);
}

export default Conversation
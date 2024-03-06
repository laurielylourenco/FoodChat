import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material/styles";
import Header from './Header';
import Footer from './Footer';
import Message from './Message';
import { faker } from '@faker-js/faker';


const Conversation = ({ conversa }) => {
    const theme = useTheme();

    return (


<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
  <Container>
    <Header />
    <Box sx={{ height: "50vh", overflowY: "scroll", position: "relative" }}>
      <Message conversa={1} />
    </Box>
    <Footer /> 
  </Container>
</div>


    )
}

export default Conversation
import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material/styles";
import Header from './Header';
import Footer from './Footer';
import Message from './Message';

const Conversation = ({ conversa }) => {
  const theme = useTheme();

  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
      }}
    >

      <Paper
        elevation={3}
        style={{
          padding: '20px',
          width: '800px', // Ajuste a largura conforme necessário
        }}
      >
        <Header />
        <Box sx={{ height: "50vh", overflowY: "scroll", position: "relative" }}>
          <Message conversa={1} />
        </Box>
        <Footer />
      </Paper>
    </Container>
  );
}

export default Conversation
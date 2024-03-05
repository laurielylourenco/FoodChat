import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material/styles";
import Header from './Header';
import Footer from './Footer';
import Message from './Message';

const Conversation = ({conversa}) => {
    const theme = useTheme();
    

    return (
        <Stack height={"100%"}
            maxHeight={"100vh"}
            width={"auto"}
        >
            {/* Chat Header */}

            <Header />

            {/* MSG */}
            <Box width={"100%"} sx={{ flexGrow: 1, height: "100%", overflow: "scroll"  ,  position: "relative"}}>
                <Message height={"500px"} conversa={conversa}/>
                {/*          <Typography>
                Dados aqui
            </Typography> */}

            </Box>

            {/* Chat Footer */}
            <Footer />

        </Stack>
    )
}

export default Conversation
import { Box, Stack, IconButton, TextField, InputAdornment, Fab, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { Camera, File, Image, LinkSimple, PaperPlane, Smiley, Sticker, User } from 'phosphor-react';
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'


const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px !important",
        paddingBottom: "12px !important",
    },
}));

const Actions = [
    {
        color: "#4da5fe",
        icon: <Image size={24} />,
        y: 102,
        title: "Photo/Video",
    },
    {
        color: "#1b8cfe",
        icon: <Sticker size={24} />,
        y: 172,
        title: "Stickers",
    },
    {
        color: "#0172e4",
        icon: <Camera size={24} />,
        y: 242,
        title: "Image",
    },
    {
        color: "#0159b2",
        icon: <File size={24} />,
        y: 312,
        title: "Document",
    },
    {
        color: "#013f7f",
        icon: <User size={24} />,
        y: 382,
        title: "Contact",
    },
];

const ChatInput = ({ setOpenPicker, setMessageInput }) => {
    const [openActions, setOpenActions] = useState(false);

    const handleChange = (event) => {

        setMessageInput(event.target.value);
    };

    return (
        <StyledInput
            variant="filled"
            fullWidth
            placeholder="Escreva uma mensagem"
            InputProps={{
                disableUnderline: true,
                onChange: handleChange,
                startAdornment: (
                    <Stack sx={{ width: 'max-content' }}>
                        <Stack
                            sx={{
                                position: 'relative',
                                display: openActions ? 'inline' : 'none',
                            }}
                        >
                            {Actions.map((el) => (
                                <Tooltip placement="right" title={el.title} key={el.title}>
                                    <Fab
                                        sx={{
                                            position: 'absolute',
                                            top: -el.y,
                                            backgroundColor: el.color,
                                        }}
                                    >
                                        {el.icon}
                                    </Fab>
                                </Tooltip>
                            ))}
                        </Stack>
                        <InputAdornment>
                            <IconButton
                                onClick={() => {
                                    setOpenActions((prev) => !prev);
                                }}
                            >
                                <LinkSimple />
                            </IconButton>
                        </InputAdornment>
                    </Stack>
                ),
                endAdornment: (
                    <InputAdornment>
                        <IconButton
                            onClick={() => {
                                setOpenPicker((prev) => !prev);
                            }}
                        >
                            <Smiley />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};



const Footer = ({ handleNewMessage }) => {

    const theme = useTheme();
    const [openPicker, setOpenPicker] = useState(false);
    const [messageInput, setMessageInput] = useState('');

    const handleSendMessage = () => {

        // You can perform any additional checks or processing here

      
        if (messageInput.trim() !== '') {

            console.log("messageInput", messageInput)

            handleNewMessage(messageInput); // Pass the message to the parent component
         //   setMessageInput(''); // Clear the input field
        }
    };

    return (
        <>
            <Box sx={{
                height: 50,
                width: "100%",
                backgroundColor: "#F8FAFF",
                boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"
            }}>
                <Stack alignItems={"center"} direction={"row"} spacing={1} >
                    <Stack sx={{ width: "100%" }}>

                        <Box sx={{ display: openPicker ? 'inline' : 'none', zIndex: 10, position: "fixed", bottom: 81, right: 100 }}>

                            <Picker theme={theme.palette.mode} data={data} onEmojiSelect={console.log} />

                        </Box>

                        <ChatInput setOpenPicker={setOpenPicker} setMessageInput={setMessageInput} />

                    </Stack>

                    <Box sx={{ borderRadius: 1.5, height: 48, width: 48, backgroundColor: '#D95204' }} onClick={handleSendMessage}>
                        <Stack sx={{ height: "100%", width: "100%", alignItems: "center", justifyContent: "center" }}>
                            <IconButton>
                                <PaperPlane color='#fff' />
                            </IconButton>
                        </Stack>
                    </Box>
                </Stack>

            </Box>

        </>
    )
}

export default Footer
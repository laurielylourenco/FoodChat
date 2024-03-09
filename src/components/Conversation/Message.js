import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CardMsg, DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from './MsgTypes';

const Message = ({ messages }) => {
/* 
    useEffect(() => {
        console.log('Mensagens atualizadas:', messages);
    }, [messages]);  */

    console.log('Message>:   ', messages)
    return (
        <Box p={3} sx={{ backgroundColor: "#efefef" }} >
            <Stack spacing={3}>
                {messages.map((msg, index) => {
                    switch (msg.type) {
                        case "img":
                            return <MediaMsg key={index} el={msg} />;
                        case "doc":
                            return <DocMsg key={index} el={msg} />;
                        case "link":
                            return <LinkMsg key={index} el={msg} />;
                        case "reply":
                            return <ReplyMsg key={index} el={msg} />;
                        case 'card':
                            return <CardMsg key={index} el={msg} />;
                        default:
                            return <TextMsg key={index} el={msg} />;
                    }
                })}
            </Stack>


        </Box>


    )
}

export default Message
import { Box, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import { Chat_History, Chat_Atendimento } from "../../data";
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from './MsgTypes';

const Message = ({ conversa }) => {

    useEffect(() => {
        filterChats();
    }, [conversa]); // Executar a função quando a propriedade 'conversa' mudar

    const filterChats = () => {
        var msg_atd = Chat_Atendimento.filter((el) => conversa == el.id_atd);
        console.log("id conversa:  ", conversa);
        console.log('msg_atd:   ', msg_atd);
    }

    return (


        <Box p={3}>
            <Stack spacing={3} >
         
                {Chat_Atendimento.filter((el) => conversa == el.id_atd).map((el) => {

                    switch (el.type) {
                        case 'divider':
                            return (
                                <Timeline el={el} />
                            )
                        case 'msg':

                            switch (el.subtype) {
                                case "img":
                                    return <MediaMsg el={el} />;
                                case "doc":

                                    return <DocMsg el={el} />;

                                case "link":

                                    return <LinkMsg el={el} />;


                                case "reply":
                                    return <ReplyMsg el={el} />;
                                default:
                                    return <TextMsg el={el} />;

                            }
                            break;

                        default:
                            return <></>;

                    }
                })}
            </Stack>

        </Box>


    )
}

export default Message
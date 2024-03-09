import { Box, Divider, Stack, Typography, Link, IconButton, Menu, Card, CardContent, CardMedia, MenuItem } from '@mui/material'
import * as React from 'react';
import { useTheme } from "@mui/material/styles";
import { DotsThreeVertical, Download, DownloadSimple, Image } from 'phosphor-react';
import { Message_options } from '../../data'

const DocMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <Stack
            direction={"row"}
            justifyContent={el.incoming ? "start" : "end"}
        >
            <Box p={1.5}
                sx={{
                    backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                    borderRadius: 1.5,
                    width: "max-content"
                }}
            >

                <Stack spacing={2}>
                    <Stack p={2} direction={"row"} spacing={3}
                        alignItems={"center"} sx={{
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: 1
                        }}
                    >

                        <Image size={48}></Image>
                        <Typography variant="caption">Abstract.png</Typography>


                        <IconButton>
                            <DownloadSimple></DownloadSimple>
                        </IconButton>
                    </Stack>

                    <Typography variant='body2'
                        sx={{
                            color: el.incoming ? theme.palette.text : theme.palette.primary.main


                        }}

                    >{el.message}</Typography>
                </Stack>

            </Box>
            <MessageOptions></MessageOptions>
        </Stack>
    )

}

const LinkMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <Stack
            direction={"row"}
            justifyContent={el.incoming ? "start" : "end"}
        >
            <Box p={1.5}
                sx={{
                    backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                    borderRadius: 1.5,
                    width: "max-content"
                }}
            >
                <Stack spacing={2}>
                    <Stack p={2} spacing={3} alignItems={"start"}
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: 1
                        }}>
                        <img src={el.preview} alt={el.message}
                            style={{ maxHeight: 210, borderRadius: "10px" }}

                        />

                        <Stack spacing={2}>
                            <Typography variant='subtitle2'>Isso teste</Typography>
                            <Typography variant='subtitle2' component={Link} to="//https://salty-beach-42139.herokuapp.com">https://salty-beach-42139.herokuapp.com/</Typography>
                        </Stack>

                        <Typography variant='body2'
                            color={el.incoming ? theme.palette.text : "#fff"}
                        >
                            {el.message}
                        </Typography>


                    </Stack>
                </Stack>
            </Box>
            <MessageOptions></MessageOptions>
        </Stack>
    )

}



const ReplyMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <Stack
            direction={"row"}
            justifyContent={el.incoming ? "start" : "end"}
        >
            <Box p={1.5}
                sx={{
                    backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                    borderRadius: 1.5,
                    width: "max-content"
                }}
            >

                <Stack spacing={2}>

                    <Stack p={2} direction={'column'} spacing={3} alignItems={'center'}
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: 1
                        }}
                    >

                        <Typography variant='body2' color={theme.palette.text}>
                            {el.message}
                        </Typography>

                    </Stack>

                    <Typography variant='body2' color={el.incoming ? theme.palette.text : "#fff"}>
                        {el.reply}
                    </Typography>
                </Stack>
            </Box>
            <MessageOptions></MessageOptions>
        </Stack>
    )

}

const CardMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <Stack
            direction={"row"}
            justifyContent={el.incoming ? "start" : "end"}
        >
              <Card sx={{ width: '90%', maxWidth: 400 }}>
                    <CardMedia
                        component="img"
                        alt="Avatar"
                        height="140"
                        image={el.imageUri}
                        style={{ opacity: 0.85 }}
                    />
                    <CardContent>
                        <Typography variant="h5" color={el.incoming ? theme.palette.text : "#fff"}>
                            {el.title}
                        </Typography>
                        <Typography variant='body2' color={el.incoming ? theme.palette.text : "#fff"}>
                            {el.message}
                        </Typography>
                    </CardContent>
                </Card>
      
        </Stack>

    );
};


const MediaMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <Stack
            direction={"row"}
            justifyContent={el.incoming ? "start" : "end"}
        >
            <Box p={1.5}
                sx={{
                    backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                    borderRadius: 1.5,
                    width: "max-content"
                }}
            >

                <Stack spacing={1}>

                    <img src={el.img}
                        style={{ maxHeight: 210, borderRadius: "10px" }}
                    />

                    <Typography variant='body2' color={el.incoming ? theme.palette.text : "#fff"}>
                        {el.message}
                    </Typography>
                </Stack>


            </Box>
            <MessageOptions></MessageOptions>
        </Stack>
    )

}


const TextMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <Stack
            direction={"row"}
            justifyContent={el.incoming ? "start" : "end"}
        >
            <Box p={1.5}
                sx={{
                    backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                    borderRadius: 1.5,
                    width: "max-content"
                }}
            >

                <Typography variant='body2' color={el.incoming ? theme.palette.text : "#fff"}>
                    {el.message}
                </Typography>
            </Box>

            {/* Options */}

            <MessageOptions></MessageOptions>
        </Stack>
    )

}

const Timeline = ({ el }) => {
    const theme = useTheme();
    return <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>

        <Divider width="46%" />
        <Typography
            variant='caption'


        >{el.text}


        </Typography>
        <Divider width="46%" />
    </Stack>
}

const MessageOptions = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <DotsThreeVertical size={20}

                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
            </DotsThreeVertical>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >

                <Stack spacing={1} px={1}>

                    {Message_options.map((e) => (

                        <MenuItem onClick={handleClose}>
                            {e.title}
                        </MenuItem>


                    ))}

                </Stack>
            </Menu>

        </>
    )
}


export { Timeline, CardMsg, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg }
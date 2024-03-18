import { Box, Stack, IconButton, Typography, Divider, Avatar, Badge } from '@mui/material'
import React from 'react'
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from 'phosphor-react';
import { styled } from "@mui/material/styles";
import { faker } from '@faker-js/faker';
import { useTheme } from "@mui/material/styles";
import LogoutIcon from '@mui/icons-material/Logout';

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "ripple 1.2s infinite ease-in-out",
            border: "1px solid currentColor",
            content: '""',
        },
    },
    "@keyframes ripple": {
        "0%": {
            transform: "scale(.8)",
            opacity: 1,
        },
        "100%": {
            transform: "scale(2.4)",
            opacity: 0,
        },
    },
}));


const Header = ({logoutGoogle, userInfo}) => {
    const theme = useTheme();
    const handleLogout = (event) => {
        logoutGoogle(true)
    };

    return (
        <>
            <Box p={2} sx={{
                height: 30,
                width: "auto",
                backgroundColor: "#F8FAFF",
                boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"
            }}>


                <Stack alignItems={"center"} direction={"row"}
                    justifyContent={"space-between"}
                    sx={{ width: "100%", height: "100%" }}

                >

                    <Stack direction={"row"} spacing={2}>
                        <Box>

                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                variant="dot"
                            >
                                <Avatar src={userInfo.photoURL} >
                                </Avatar>
                            </StyledBadge>


                        </Box>

                        <Stack spacing={0.2}>
                            <Typography>
                                {userInfo.displayName}

                            </Typography>
                        </Stack>
                    </Stack>

                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={3}>


                        <Divider orientation='vertical' flexItem />

                        <IconButton>
                            <LogoutIcon onClick={() => { handleLogout((prev) => !prev);}} />
                        </IconButton>

                    </Stack>
                </Stack>

            </Box>
        </>
    )
}

export default Header
import React, { useEffect, useState, useHistory } from 'react';
import { firebaseInit } from '../../utils/firebaseInit';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import * as firebaseui from 'firebaseui';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Button, Card, CardContent } from '@mui/material'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GoogleIcon from '@mui/icons-material/Google';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        FoodChat
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

/* const provider = new GoogleAuthProvider();

var uiConfig = {
  signInSuccessUrl: '/chat',
  signInOptions: [
    provider.providerId
  ],
  tosUrl: 'https://vps49040.publiccloud.com.br/sec/terms.php',
  privacyPolicyUrl: function () {
    window.location.assign('https://vps49040.publiccloud.com.br/sec/terms.php');
  }
}; */




export default function Login() {

  const [user, setUser] = useState([]);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(firebaseInit)
      const result = await signInWithPopup(auth, provider);

      console.log('Login user:   ', result.user)
      setUser(result.user);

      window.location.replace("/chat")
    } catch (error) {
      console.error('Erro ao fazer login com o Google:', error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      const auth = getAuth(firebaseInit);
      await signOut(auth);
      setUser([]);
      window.location.replace("/login")

    } catch (error) {
      console.error('Erro ao fazer logout:', error.message);
    }
  };


  /*   React.useEffect(() => {
  
      ui.start('#firebaseui-auth-container', uiConfig);
  
      return () => {
        ui.reset();
      };
    }, []); */



  return (

    <Container component="main" maxWidth="xs">

      <Card>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'warning.light' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Button onClick={signInWithGoogle} variant="contained"  sx={{ m: 1, background: 'warning.light', bgcolor: 'warning.light',  '&:hover, &:focus': {
              color: '#fff', //  '#ff9800'
              background: '#D96704',
            } }} endIcon={<GoogleIcon />}>
            Login
          </Button>

        </Box>
        <CardContent>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Typography component="p" variant="body2">
              Reserve sua mesa Rango
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>

  );
}





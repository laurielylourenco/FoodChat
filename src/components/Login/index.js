import * as React from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import * as firebaseui from 'firebaseui';
import { getAnalytics } from "firebase/analytics";
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Card, CardContent } from '@mui/material'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { firebaseConfig } from '../../utils/firebase';

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

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
var uiConfig = {
  signInSuccessUrl: '/chat',
  signInOptions: [
    provider.providerId
  ],
  tosUrl: 'https://vps49040.publiccloud.com.br/sec/terms.php',
  privacyPolicyUrl: function () {
    window.location.assign('https://vps49040.publiccloud.com.br/sec/terms.php');
  }
};

var ui = new firebaseui.auth.AuthUI(getAuth());

export default function Login() {

  
  ui.start('#firebaseui-auth-container', uiConfig);
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Box id="firebaseui-auth-container">
          </Box>
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
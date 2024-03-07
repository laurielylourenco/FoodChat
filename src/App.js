
import Conversation from "./components/Conversation";
import SignIn from "./pages/login/Sign";
import { Box, Container, Stack, Typography } from '@mui/material'
// https://vps49040.publiccloud.com.br/bot/uam/castelo1.jpg

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url('./pablo-merchan-montes-GFW3dJRiMsQ-unsplash.jpg')`,
  };


  return (
    <div className="App" style={backgroundImageStyle}  >

      <Conversation>

      </Conversation>

    </div>
  );
}

export default App;

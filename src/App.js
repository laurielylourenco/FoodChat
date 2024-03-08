

import AppRouter from "./routes";

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url('./pablo-merchan-montes-GFW3dJRiMsQ-unsplash.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
/*  style={backgroundImageStyle} */
  return (
    <div className="App"  >
    <AppRouter></AppRouter>

    </div>
  );
}

export default App;

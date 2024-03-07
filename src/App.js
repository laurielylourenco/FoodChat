

import AppRouter from "./routes";

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url('./pablo-merchan-montes-GFW3dJRiMsQ-unsplash.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="App" style={backgroundImageStyle}  >
    <AppRouter></AppRouter>

    </div>
  );
}

export default App;

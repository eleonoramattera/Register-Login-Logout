import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/Login";
import Login from "./components/Login";
import Registrazione from "./components/Registrazione";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import WelcomePage from "./components/WelcomePage";
import Logout from "./components/Logout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Container className="text-center m-auto mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registrazione" element={<Registrazione />} />
            <Route path="/login" element={<Login />} />
            <Route path="welcomepage" element={<WelcomePage />} />
            <Route path="logout" element={<Logout />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import "./App.css";
 import {HomePage} from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { LoginPage } from "./pages/LoginPage";



function App(){

  return (
    <>
      <BrowserRouter>
        <header>
          <Toolbar className="App-header">
            <Button component={Link} to="/">
              <Typography variant="h6" className="App-logo ">
                SA-App
              </Typography>
            </Button>

            <>
              <Button component={Link} to="/">
                Главная
              </Button>
              <Button component={Link} to="/login">
                Вход
              </Button>
              <Button component={Link} to="/registration">
                Регистрация
              </Button>
            </>
          </Toolbar>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
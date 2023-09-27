import { useState } from "react";
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import "./App.css";
import {HomePage} from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { LoginPage } from "./pages/LoginPage";
import { WatchedPage } from "./pages/WatchedPage";
import { WatchListPage } from "./pages/WatchListPage";
import { TopFilmsPage } from "./pages/TopFilmsPage";

import {
  Button,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  Hidden,
} from "@mui/material";



function App(){

 const [mobileOpen, setMobileOpen] = useState(false);

 const handleDrawerToggle = () => {
   setMobileOpen(!mobileOpen);
 };

   const drawer = (
     <>
       <Button component={Link} to="/">
         Главная
       </Button>
       <Button component={Link} to="/topfilms">
         Фильмы
       </Button>
       <Button component={Link} to="/watched">
         Просмотрено
       </Button>
       <Button component={Link} to="/watchlist">
         Хочу посмотреть
       </Button>
       <Button component={Link} to="/login">
         Вход
       </Button>
       <Button component={Link} to="/registration">
         Регистрация
       </Button>
     </>
   );

  return (
    <>
      <BrowserRouter>
        <header>
          <Toolbar>
            <Button component={Link} to="/">
              <Typography variant="h6" className="App-logo">
                SA-App
              </Typography>
            </Button>

            <Hidden mdDown>{drawer}</Hidden>

            <Hidden mdUp>
              <IconButton
                color="secondary"
                aria-label="open menu"
                edge="end"
                onClick={handleDrawerToggle}
              >
                {/* <MenuIcon /> */}
                OPEN
              </IconButton>
            </Hidden>
          </Toolbar>

          <nav>
            <Hidden mdUp>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
              >
                <List>
                  <ListItem sx={{ display: "flex", flexDirection: "column" }}>
                    {drawer}
                  </ListItem>
                </List>
              </Drawer>
            </Hidden>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/watched" element={<WatchedPage />} />
          <Route path="/watchlist" element={<WatchListPage />} />
          <Route path="/topfilms" element={<TopFilmsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
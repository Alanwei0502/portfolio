import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Container,
} from '@mui/material';
import Logo from './logo';
import NavBar from './navbar';



const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Logo />
          <NavBar />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

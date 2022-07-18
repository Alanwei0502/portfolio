import React from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Slide,
  useScrollTrigger,
} from '@mui/material';
import { HeaderContainer } from './index.style';
import Logo from './logo';
import NavBar from './navbar';

const Header = () => {
  const trigger = useScrollTrigger({ target: window });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <HeaderContainer>
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <Logo />
            <NavBar />
          </Toolbar>
        </Container>
      </HeaderContainer>
    </Slide>
  );
};

export default Header;

import React from 'react'
import { useNavigate } from "react-router-dom"
import {
  Box,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { selectTheme, toggleTheme } from '../../../store/theme/themeSlice'

const pages = ['Project', 'Article', 'About'];

const NavBar = () => {
  const navigate = useNavigate();
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const onOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const onCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const onClick = (page: string) => () => {
    navigate(`/${page}`);
  }

  const onToggleTheme = () => {
    onCloseNavMenu();
    dispatch(toggleTheme());
  }

  const onPhoneMenuClick = (page: string) => () => {
    onCloseNavMenu();
    navigate(`/${page}`);
  }

  return (
    <>
      {/* RWD 900px 以上 */}
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={onClick(page)}
            color="inherit"
            sx={{ my: 2, mr: 2, display: 'block' }}
          >
            {page}
          </Button>
        ))}
        <IconButton onClick={onToggleTheme} color="inherit">
          {theme === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>

      {/* RWD 900px 以下 */}
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={onOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={onCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={onPhoneMenuClick(page)}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
          <MenuItem onClick={onToggleTheme}>
            {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </MenuItem>
        </Menu>
      </Box>
    </>
  )
}

export default NavBar
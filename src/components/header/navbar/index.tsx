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

const pages = ['project', 'article', 'about'];

const NavBar = () => {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const onClick = (page: string) => () => {
    navigate(`/${page}`);
  }

  return (
    <>
      {/* RWD 900px 以上 */}
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={onClick(page)}
            sx={{ my: 2, mr: 2, color: 'white', display: 'block' }}
          >
            {page}
          </Button>
        ))}
      </Box>

      {/* RWD 900px 以下 */}
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
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
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={onClick(page)}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  )
}

export default NavBar